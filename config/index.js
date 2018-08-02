const debuggler = require('debuggler');
const Env = require('./env');

const debug = debuggler();

debug('initializing app configuration');

const logger = require('./logger');
const Promise = require('./promise');
const redis = require('./redis');
const passport = require('./passport');
const mongoose = require('./mongoose');
const firebase = require('./firebase');

module.exports = {
  Promise,
  Env,
  logger,
  redis,
  passport,
  mongoose,
  firebase,
};
