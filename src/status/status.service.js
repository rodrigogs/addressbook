const { Env } = require('../../config/index');
const pkg = require('../../package');

const StatusService = {
  /**
   * @return {Promise<{uptime, host: *}>}
   */
  getStatus: async () => ({
    name: pkg.name,
    version: pkg.version,
    context: Env.NODE_ENV,
  }),
};

module.exports = StatusService;
