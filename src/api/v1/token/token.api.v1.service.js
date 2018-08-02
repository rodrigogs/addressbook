const debug = require('debuggler')();
const Token = require('./token.api.v1.model');
const InactiveTokenError = require('./exceptions/InactiveTokenError');
const ExpiredTokenError = require('./exceptions/ExpiredTokenError');
const uuidv4 = require('uuid/v4');
const ObjectUtil = require('../../../util/object.util');

const TokenService = {
  /**
   * @param {String} token
   * @return {Promise<Token>}
   */
  async get(token) {
    if (ObjectUtil.isObject(token)) {
      token = token.accessToken;
    }

    debug(`retrieving token for hash "${token}"`);

    return Token.findOne({ accessToken: token }).exec();
  },

  /**
   * @param {String} salt
   * @param {String[]} scopes
   * @return {Promise<Token>}
   */
  async create(salt, scopes) {
    const accessToken = uuidv4(256) + salt;
    const refreshToken = uuidv4(256) + salt;
    return new Token({ accessToken, refreshToken, scopes }).save();
  },

  async refresh(refreshToken) {
    const token = await Token.findOne({ refreshToken }).exec();
    if (!token.active) throw new InactiveTokenError(token.accessToken);

    token.accessToken = uuidv4(256) + token._id;
    await token.save();

    return token;
  },

  /**
   * @param {Object} token
   * @return {Boolean}
   */
  validate(token) {
    const createdAt = new Date(token.createdAt);
    const isExipired = (new Date().getTime() - createdAt.getTime()) > token.duration;

    if (isExipired) throw new ExpiredTokenError(token.accessToken);
    if (!token.active) throw new InactiveTokenError(token.accessToken);
  },
};

module.exports = TokenService;
