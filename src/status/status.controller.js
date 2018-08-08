const debug = require('debuggler')();
const StatusService = require('./status.service');

const StatusController = {
  /**
   * @api {get} / Health check
   * @apiVersion 1.0.0
   * @apiName HealthCheck
   * @apiGroup Health
   * @apiPermission any
   *
   * @apiDescription Verify if the server is running.
   *
   * @apiExample Example usage:
   * curl -i http://localhost:3000/
   */
  async get(ctx) {
    debug('retrieving status');

    ctx.body = await StatusService.getStatus();
  },
};

module.exports = StatusController;
