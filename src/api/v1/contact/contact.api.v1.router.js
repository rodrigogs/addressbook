const debug = require('debuggler')();
const Router = require('koa-router');
const ContactController = require('./contact.api.v1.controller');

const router = new Router();

debug('configuring routes');

router.post('/', ContactController.create);

module.exports = router;
