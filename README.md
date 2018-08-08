# addressbook

## Setup
```bash
$ npm install
```

## Develop
```bash
$ npm start
```

## Test
```bash
$ npm test
```

## Create seed data
```bash
$ ./bin/seed
```

## Run
```bash
$ ./bin/www
```

## Environment
**When `NODE_ENV` environment variable is not set to `production`, the application automatically tries to load the environment config from a `.env` file located in the project root folder.**
* DEBUG
  - See: https://www.npmjs.com/package/debuggler
* NODE_ENV
  - **production**
    - Does not load any variable from `.env` file.
  - **development**
    - Loads variables from `.env` file.
  - **test**
    - Loads variables from `.env.test` file.
* HTTP_LOG_CONFIG
  - See: https://github.com/expressjs/morgan#predefined-formats
* REDIS_URL
  - See: http://www.iana.org/assignments/uri-schemes/prov/redis
* MONGO_URL
  - See: https://www.iana.org/assignments/uri-schemes/prov/mongodb
