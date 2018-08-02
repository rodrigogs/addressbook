const path = require('path');

/**
* @see https://github.com/motdotla/dotenv#usage
*/
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env.test') });
} if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
}

/**
 * @class Env
 */
class Env {
  /**
   * Application context.
   *
   * @default 'development'
   * @return {String}
   */
  static get NODE_ENV() {
    return (process.env.NODE_ENV || 'development');
  }

  /**
   * Application port.
   *
   * @default 3000
   * @return {Number}
   */
  static get PORT() {
    return process.env.PORT ? Number(process.env.PORT) : 3000;
  }

  /**
   * HTTP log config.
   *
   * @see https://github.com/expressjs/morgan#predefined-formats
   * @default 'dev'
   * @return {String}
   */
  static get HTTP_LOG_CONFIG() {
    return process.env.HTTP_LOG_CONFIG || 'dev';
  }

  /**
   * Redis connection string.
   *
   * @see http://www.iana.org/assignments/uri-schemes/prov/redis
   * @default 'redis://localhost:6379'
   * @return {String}
   */
  static get REDIS_URL() {
    return process.env.REDIS_URL || 'redis://localhost:6379';
  }

  /**
   * Redis connection string.
   *
   * @see https://www.iana.org/assignments/uri-schemes/prov/mongodb
   * @default 'mongodb://localhost:27017/addressbook'
   * @return {String}
   */
  static get MONGO_URL() {
    return process.env.MONGO_URL || 'mongodb://localhost:27017/addressbook';
  }

  /**
   * Firebase database url.
   *
   * @return {String}
   */
  static get FIREBASE_URL() {
    return process.env.FIREBASE_URL;
  }
}

module.exports = Env;
