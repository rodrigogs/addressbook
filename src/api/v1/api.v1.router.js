const debug = require('debuggler')();
const Router = require('koa-router');
const AuthMiddleware = require('./auth/auth.api.v1.middleware');

const router = new Router();

debug('configuring routes');

const AuthRouter = require('./auth');
const UserRouter = require('./user');
const ContactRouter = require('./contact');

router.use('/auth', AuthRouter.routes(), AuthRouter.allowedMethods());

router.use(AuthMiddleware.authenticate()); // Ensure authentication for the following routes

router.use(
  '/user',
  AuthMiddleware.grant('user'),
  UserRouter.routes(), UserRouter.allowedMethods(),
);

router.use(
  '/contact',
  AuthMiddleware.grant('contact'),
  ContactRouter.routes(), ContactRouter.allowedMethods(),
);

module.exports = router;
