const debug = require('debuggler')();
const redis = require('redis');
const Env = require('./env');
const logger = require('./logger');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const retryStrategy = (options) => {
  if (options.error) debug(`server refused connection with error code: ${options.error.code}`);
  return Math.min(options.attempt * 100, 20000);
};

debug('creating redis client');
const client = redis.createClient(Env.REDIS_URL, {
  retry_strategy: retryStrategy,
});

client.on('ready', () => debug('client is ready'));
client.on('connect', () => logger.info('Redis client connected'));
client.on('reconnecting', () => debug('client reconnecting'));
client.on('error', err => logger.error('Redis error', err));
client.on('end', () => debug('client connection closed'));
client.on('warning', warning => logger.warn('warning', warning));

const waitForReady = (timeout = 5000) => new Promise((resolve, reject) => {
  if (client.ready) return resolve();

  client.once('ready', resolve);
  client.once('error', reject);

  setTimeout(() => {
    reject(new Error('Connection timed out'));
  }, timeout);
});

module.exports = client;
module.exports.waitForReady = waitForReady;
