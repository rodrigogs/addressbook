const debug = require('debuggler')();
const StatusService = require('./status.service');

const StatusController = {
  /**
   */
  async get(ctx) {
    debug('retrieving status');

    ctx.body = await StatusService.getStatus();
  },
};

module.exports = StatusController;
