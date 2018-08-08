define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/jwt",
    "title": "Authenticate",
    "version": "1.0.0",
    "name": "AuthJwt",
    "group": "Auth",
    "permission": [
      {
        "name": "any"
      }
    ],
    "description": "<p>Authenticate for a jwt.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n  --url http://localhost:3000/api/v1/auth/jwt \\\n  --header 'content-type: application/json' \\\n  -d username=admin -d password=admin -d scopes=[ \"admin:admin\" ]",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "scopes",
            "description": "<p>Authentication scopes.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User token id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Authenticated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Refresh token.</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/auth/auth.api.v1.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/v1/auth/jwt",
    "title": "Refresh token",
    "version": "1.0.0",
    "name": "AuthRefreshJwt",
    "group": "Auth",
    "permission": [
      {
        "name": "any"
      }
    ],
    "description": "<p>Refresh jwt token.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n  --url http://localhost:3000/api/v1/auth/jwt/refresh \\\n  --header 'content-type: application/json' \\\n  -d refreshToken=7e20cb3d-4bbd-4033-b16c-6280cb5898de5b6115e9e52e13441c4cacbe",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "scopes",
            "description": "<p>Authentication scopes.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User token id.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Authenticated user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.accessToken",
            "description": "<p>Access token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.refreshToken",
            "description": "<p>Refresh token.</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/auth/auth.api.v1.controller.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/v1/contact/",
    "title": "Create contact",
    "version": "1.0.0",
    "name": "CreateContact",
    "group": "Contact",
    "permission": [
      {
        "name": "contact:write"
      }
    ],
    "description": "<p>Creates a new contact.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/contact -d name=myenv",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Contact first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Contact last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Contact company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Contact address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Contact phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Contact first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Contact last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>Contact company name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Contact address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Contact phone.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/contact/contact.api.v1.controller.js",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/v1/user/",
    "title": "Create user",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "user:write"
      }
    ],
    "description": "<p>Creates a new user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/user -d name=Administrator -d username=admin -d password=admin -d email=admin@admin.com -d about=\"About me\"",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>User about.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>User about.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Last time updated.</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/user/user.api.v1.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/v1/user/:id",
    "title": "Delete user",
    "version": "1.0.0",
    "name": "DisableUser",
    "group": "User",
    "permission": [
      {
        "name": "user:write"
      }
    ],
    "description": "<p>Disables an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://localhost:3000/v1/user/12345",
        "type": "json"
      }
    ],
    "filename": "src/api/v1/user/user.api.v1.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/user/:id",
    "title": "Get user by id",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user:read"
      }
    ],
    "description": "<p>Gets an user by its id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:3000/v1/user/597168b5f780cc3a48cf6215",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>User about.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>User creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Last time updated.</p>"
          }
        ]
      }
    },
    "filename": "src/api/v1/user/user.api.v1.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/v1/user/:id",
    "title": "Update user",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user:write"
      }
    ],
    "description": "<p>Updates an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "about",
            "description": "<p>User about.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT http://localhost:3000/v1/user/12345 -d name=NewName",
        "type": "json"
      }
    ],
    "filename": "src/api/v1/user/user.api.v1.controller.js",
    "groupTitle": "User"
  }
] });
