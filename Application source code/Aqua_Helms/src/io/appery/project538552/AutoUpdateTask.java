package io.appery.project538552;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.UUID;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaActivity;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.AsyncTask;
import android.os.Handler;
import android.preference.PreferenceManager;
import android.util.Log;

public class AutoUpdateTask extends AsyncTask<Long, Void, String> {

    private final static String TAG = "AutoUpdateTask";

    private final static String GET_BUNDLE_URL = "";

    private static final Long BUILD_TIMESTAMP_MILLISEC = 1522638671 * 1000L;

    private static final String[] JQM_ASSETS_TO_COPY = new String[]{
            "cordova.js",
            "cordova_plugins.js",
            "get_target_platform.js",
            "plugins"
    };

    private static final String[] ANGULAR_ASSETS_TO_COPY = new String[]{
            "cordova.js",
            "cordova_plugins.js",
            "plugins"
    };

    private static final String CORDOVA_JQM_LIB_DIR = "www/files/resources/lib/";

    private static final String CORDOVA_ANGULAR_LIB_DIR = "www/libs/";

    public static final String WORK_DIR = "file:///android_asset/www/";

    private CordovaActivity activity;

    private CordovaWebView webView;

    private int splashscreenTime = 0;

    private boolean hideSplashScreen = false;

    private ProgressDialog spinnerDialog = null;

    private SharedPreferences app_preferences;

    private static final String WEB_RESOURCES_DIR = "/www/";

    private static final String FILES_DIR = "/files";

    private final static String BUILD_TIME_PREF_NAME = "BuildTime";

    public AutoUpdateTask(CordovaActivity activity, CordovaWebView webView,
            int splashscreenTime) {
        this.activity = activity;
        this.webView = webView;
        this.splashscreenTime = splashscreenTime;
    }

    @Override
    protected String doInBackground(Long... params) {
        final String baseDirectory = AutoUpdateHelper.DATA_DIR
                + activity.getPackageName();
        try {
            app_preferences = PreferenceManager
                    .getDefaultSharedPreferences(activity);
            Long modifiedDate = app_preferences.getLong(BUILD_TIME_PREF_NAME,
                    BUILD_TIMESTAMP_MILLISEC);

            if (!isConnectionActive()) {
                Log.d(TAG, "No connection");
                return BUILD_TIMESTAMP_MILLISEC.equals(modifiedDate) ? null
                        : baseDirectory + WEB_RESOURCES_DIR;
            }

            URL url = new URL(GET_BUNDLE_URL);

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setIfModifiedSince(modifiedDate);
            conn.setReadTimeout(180000);
            conn.setConnectTimeout(1500);
            conn.setRequestMethod("GET");
            conn.setDoInput(true);
            conn.connect();

            int responseCode = conn.getResponseCode();
            Log.d(TAG, "The response code is: " + responseCode);

            String workingBundleDir = null;

            if (HttpURLConnection.HTTP_OK == responseCode) {
                InputStream is = conn.getInputStream();
                if (is != null) {
                    AutoUpdateHelper.downloadBundle(is, baseDirectory
                            + FILES_DIR);
                    conn.disconnect();

                    workingBundleDir = AutoUpdateHelper.unzip(baseDirectory
                            + FILES_DIR, baseDirectory + WEB_RESOURCES_DIR);
                }

                String path = CORDOVA_JQM_LIB_DIR;
                String[] assetsToCopy = JQM_ASSETS_TO_COPY;

                File dir = new File(baseDirectory, path);
                if (!dir.exists()) {
                    path = CORDOVA_ANGULAR_LIB_DIR;
                    assetsToCopy = ANGULAR_ASSETS_TO_COPY;
                }

                for (String fName : assetsToCopy) {
                    AutoUpdateHelper.copyFileOrDir(activity, path + fName);
                }
            } else {
                return BUILD_TIMESTAMP_MILLISEC.equals(modifiedDate) ? null
                        : baseDirectory + WEB_RESOURCES_DIR;
            }

            app_preferences.getLong(BUILD_TIME_PREF_NAME, 0);
            SharedPreferences.Editor editor = app_preferences.edit();
            editor.putLong(BUILD_TIME_PREF_NAME, conn.getLastModified());
            editor.commit();

            return workingBundleDir;

        } catch (IOException e) {
            Log.e(TAG, "Autoupdate failed", e);
            return null;
        }
    }

    @Override
    protected void onPreExecute() {

        spinnerDialog = ProgressDialog.show(activity,
                activity.getString(R.string.autoupdate_title),
                activity.getString(R.string.autoupdate_message), true, true,
                new DialogInterface.OnCancelListener() {
                    public void onCancel(DialogInterface dialog) {
                        spinnerDialog = null;
                    }
                });

        if (splashscreenTime > 0) {
            final Handler handler = new Handler();
            handler.postDelayed(new Runnable() {
                public void run() {
                    if (hideSplashScreen) {
                        hideSplashScreenInAny();
                    } else {
                        hideSplashScreen = true;
                    }
                }
            }, splashscreenTime);
        }
    }

    @Override
    protected void onPostExecute(String dirName) {
        if (spinnerDialog != null && spinnerDialog.isShowing()) {
            spinnerDialog.dismiss();
            spinnerDialog = null;
        }

        if (hideSplashScreen) {
            hideSplashScreenInAny();
        } else {
            hideSplashScreen = true;
        }

        String filePath = (dirName != null ? "file://" + dirName : WORK_DIR)
                + "index.html";
        Log.d(TAG, "Open URL: " + filePath);
        activity.loadUrl(filePath);
    }

    private boolean isConnectionActive() {
        ConnectivityManager connMgr = (ConnectivityManager) activity
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connMgr.getActiveNetworkInfo();
        return networkInfo != null && networkInfo.isConnected();
    }

    private void hideSplashScreenInAny() {
        CordovaPlugin splashScreenPlugin = webView.pluginManager
                .getPlugin("SplashScreen");
        if (splashScreenPlugin != null) {
            try {
                splashScreenPlugin.execute("hide", new JSONArray(),
                        new CallbackContext(UUID.randomUUID().toString(),
                                webView));
            } catch (JSONException e) {
                Log.e(TAG, "Can't hide splashscreen", e);
            }
        }
    }
}
