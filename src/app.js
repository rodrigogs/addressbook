const {
  Env,
  logger,
  redis,
  mongoose,
} = require('../config/index');

const debug = require('debuggler')();
const path = require('path');
const Koa = require('koa');
const helmet = require('koa-helmet');
const morgan = require('koa-morgan');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const mount = require('koa-mount');
const serve = require('koa-static');
const passport = require('koa-passport');
const errorMiddleware = require('./error.middleware');

/**
 * Bootstraps Koa application.
 *
 * @return {Promise<Koa>}
 */
const bootstrap = async () => {
  debug('bootstrapping application');

  const app = new Koa();

  app.use(errorMiddleware());
  app.use(helmet());
  app.use(cors());

  app.use(mount('/docs', serve(path.resolve(__dirname, '../docs'))));

  app.use(morgan(Env.HTTP_LOG_CONFIG, { stream: logger.stream }));

  app.use(passport.initialize());

  app.use(bodyParser({
    jsonLimit: '10mb',
  }));

  await redis.waitForReady();
  await mongoose();

  const router = require('./router');
  app.use(router.routes(), router.allowedMethods());

  return app;
};

module.exports = bootstrap;
