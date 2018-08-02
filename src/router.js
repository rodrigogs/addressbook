const debug = require('debuggler')();
const Router = require('koa-router');

const router = new Router();

debug('configuring routes');

const status = require('./status/index');
const api = require('./api/index');

router.use('/', status.routes(), status.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;
