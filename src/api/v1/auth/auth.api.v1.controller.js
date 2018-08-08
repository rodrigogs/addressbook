const debug = require('debuggler')();
const AuthService = require('./auth.api.v1.service');
const UserTokenSchema = require('../userToken/userToken.api.v1.schema');
const JSONUtils = require('../../../util/json.util');

const UserTokenNormalizer = JSONUtils.normalize(UserTokenSchema);

const AuthController = {
  /**
   * @api {post} /v1/auth/jwt Authenticate
   * @apiVersion 1.0.0
   * @apiName AuthJwt
   * @apiGroup Auth
   * @apiPermission any
   *
   * @apiDescription Authenticate for a jwt.
   *
   * @apiExample Example usage:
   * curl --request POST \
   *   --url http://localhost:3000/api/v1/auth/jwt \
   *   --header 'content-type: application/json' \
   *   -d username=admin -d password=admin -d scopes=[ "admin:admin" ]
   *
   * @apiParam  {String}    username  User username.
   * @apiParam  {String}    password  User password.
   * @apiParam  {String[]}  scopes    Authentication scopes.
   *
   * @apiSuccess  {String}  _id                 User token id.
   * @apiSuccess  {Object}  user                Authenticated user.
   * @apiSuccess  {Object}  token               Generated token.
   * @apiSuccess  {String}  token.accessToken   Access token.
   * @apiSuccess  {String}  token.refreshToken  Refresh token.
   */
  jwt: async (ctx) => {
    debug('authenticating with jwt...');
    const { username, password, scopes } = ctx.request.body;

    const userToken = await AuthService.authenticateJwt(username, password, scopes);
    ctx.status = 200;
    ctx.body = UserTokenNormalizer(userToken.toObject());
  },

  /**
   * @api {post} /v1/auth/jwt Refresh token
   * @apiVersion 1.0.0
   * @apiName AuthRefreshJwt
   * @apiGroup Auth
   * @apiPermission any
   *
   * @apiDescription Refresh jwt token.
   *
   * @apiExample Example usage:
   * curl --request POST \
   *   --url http://localhost:3000/api/v1/auth/jwt/refresh \
   *   --header 'content-type: application/json' \
   *   -d refreshToken=7e20cb3d-4bbd-4033-b16c-6280cb5898de5b6115e9e52e13441c4cacbe
   *
   * @apiParam  {String}    username  User username.
   * @apiParam  {String}    password  User password.
   * @apiParam  {String[]}  scopes    Authentication scopes.
   *
   * @apiSuccess  {String}  _id                 User token id.
   * @apiSuccess  {Object}  user                Authenticated user.
   * @apiSuccess  {Object}  token               Generated token.
   * @apiSuccess  {String}  token.accessToken   Access token.
   * @apiSuccess  {String}  token.refreshToken  Refresh token.
   */
  refreshJwt: async (ctx) => {
    debug('refreshing token for jwt...');
    const { refreshToken } = ctx.request.body;

    const userToken = await AuthService.refreshJwt(refreshToken);
    ctx.status = 200;
    ctx.body = UserTokenNormalizer(userToken.toObject());
  },
};

module.exports = AuthController;
