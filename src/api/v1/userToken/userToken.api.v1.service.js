const debug = require('debuggler')();
const TokenService = require('../token/token.api.v1.service');
const UserToken = require('./userToken.api.v1.model');

const UserTokenService = {
  /**
   * @param {String} token
   * @return {Promise<UserToken>}
   */
  async get(token) {
    debug(`retrieving UserToken for token ${token}`);
    const storedToken = await TokenService.get(token);

    if (!storedToken) {
      debug(`token "${token}" not found`);
      return null;
    }

    const user = await UserToken
      .findOne({ token: storedToken })
      .populate('token')
      .populate('user')
      .exec();

    if (!user) debug(`user not found for token "${token}"`);

    return user;
  },

  /**
   * @param {Object} user
   * @param {String[]} scopes
   * @return {Token}
   */
  async create(user, scopes) {
    const token = await TokenService.create(user._id, scopes);
    return new UserToken({ user, token }).save();
  },

  /**
   * @param {String} refreshToken
   * @return {Promise<UserToken>}
   */
  async refresh(refreshToken) {
    const token = await TokenService.refresh(refreshToken);
    return UserTokenService.get(token);
  },
};

module.exports = UserTokenService;
