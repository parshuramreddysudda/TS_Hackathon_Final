/*
 * Security contexts
 */

/*
 * Service settings
 */
var Aqua_Aide_settings = {
    "database_id": "5ac100e50f0d310772dbb77e"
}
var Settings = {}
var UserSearchAPI_settings = {
    "API_EXPRESS_API_KEY": "b73351fe-cf00-497e-8b8c-b51a5ab6599f"
}
var Distance_settings = {
    "database_id": "5ac139540f0d310772dbb79f"
}

/*
 * Services
 */

var Aqua_Aide_user_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_user_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_user_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_user_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_Aqua_Aide_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_Aqua_Aide_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Aqua_Aide_Aqua_Aide_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_Aqua_Aide_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Aqua_Aide_Aqua_Aide_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_Aqua_Aide_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_Aqua_Aide_batch_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "update": {
                "acl": {
                    "*": {
                        "write": true,
                        "read": true
                    }
                }
            }
        }
    }
});

var Aqua_Aide_Aqua_Aide_distinct_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Aqua_Aide/distinct/{column_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide__files_upload_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide__files_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{file_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/octet-stream",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide__files_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{file_name}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide__files_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{database_id}/{file_name}',
    'dataType': 'data',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Aqua_Aide__files_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Aqua_Aide_distance_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_distance_batch_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "update": {
                "acl": {
                    "*": {
                        "write": true,
                        "read": true
                    }
                }
            }
        }
    }
});

var Aqua_Aide_distance_distinct_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/distance/distinct/{column_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Aqua_Aide_heller_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "acl": {
                "*": {
                    "write": true,
                    "read": true
                }
            }
        }
    }
});

var Distance_user_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance_signup_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance_user_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance_user_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/users/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_distinct_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller/distinct/{column_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance__files_upload_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_query_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance__files_create_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{file_name}',
    'dataType': 'json',
    'type': 'post',
    'contentType': false,

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/octet-stream",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance__files_delete_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{file_name}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Distance__files_read_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files/{database_id}/{file_name}',
    'dataType': 'data',
    'type': 'get',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Aqua_Aide_heller_batch_update_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/heller',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': Aqua_Aide_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "Content-Type": "application/json",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": {
            "update": {
                "acl": {
                    "*": {
                        "write": true,
                        "read": true
                    }
                }
            }
        }
    }
});

var Distance__files_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/files',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Distance_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_PARSHURAM__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/PARSHURAM/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_ANU__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/ANU/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_VAMSI__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/VAMSI/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_SHALU__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/SHALU/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_Aaroh__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/Aaroh/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_Sushmita__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/Sushmita/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_Prassana__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/Prassana/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var UserSearchAPI_Lakshmi__get = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/apiexpress/api/Lakshmi/',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': UserSearchAPI_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});