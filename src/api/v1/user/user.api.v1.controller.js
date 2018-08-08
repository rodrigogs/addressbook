const debug = require('debuggler')();
const UserService = require('./user.api.v1.service');
const UserSchema = require('./user.api.v1.schema');
const JSONUtils = require('../../../util/json.util');

const UserNormalizer = JSONUtils.normalize(UserSchema);

const UserController = {
  /**
   * @api {get} /v1/user/:id Get user by id
   * @apiVersion 1.0.0
   * @apiName GetUser
   * @apiGroup User
   * @apiPermission user:read
   *
   * @apiDescription Gets an user by its id.
   *
   * @apiExample Example usage:
   * curl -X GET http://localhost:3000/v1/user/597168b5f780cc3a48cf6215
   *
   * @apiSuccess  {String}  _id             User id.
   * @apiSuccess  {String}  name            User name.
   * @apiSuccess  {String}  username        User username.
   * @apiSuccess  {String}  password        User password.
   * @apiSuccess  {String}  email           User email.
   * @apiSuccess  {String}  about           User about.
   * @apiSuccess  {String}  createdAt       User creation date.
   * @apiSuccess  {String}  updatedAt       Last time updated.
   */
  async get(ctx) {
    debug(`retrieving user "${ctx.request.params.id}"`);

    const { id } = ctx.request.params;
    const user = await UserService.findOne({ _id: id }).exec();

    ctx.status = 200;
    ctx.body = UserNormalizer(user.toObject());
  },

  /**
   * @api {post} /v1/user/ Create user
   * @apiVersion 1.0.0
   * @apiName CreateUser
   * @apiGroup User
   * @apiPermission user:write
   *
   * @apiDescription Creates a new user.
   *
   * @apiExample Example usage:
   * curl -X POST http://localhost:3000/v1/user -d name=Administrator -d username=admin -d password=admin -d email=admin@admin.com -d about="About me"
   *
   * @apiParam    {String}    name          User name.
   * @apiParam    {String}    username      User username.
   * @apiParam    {String}    password      User password.
   * @apiParam    {String}    about         User about.
   *
   * @apiSuccess  {String}  _id             User id.
   * @apiSuccess  {String}  name            User name.
   * @apiSuccess  {String}  username        User username.
   * @apiSuccess  {String}  password        User password.
   * @apiSuccess  {String}  email           User email.
   * @apiSuccess  {String}  about           User about.
   * @apiSuccess  {String}  createdAt       User creation date.
   * @apiSuccess  {String}  updatedAt       Last time updated.
   */
  async create(ctx) {
    debug('creating user', ctx.request.body);

    const { body } = ctx.request;
    const user = await UserService.create(body);

    ctx.status = 201;
    ctx.body = UserNormalizer(user.toObject());
  },

  /**
   * @api {put} /v1/user/:id Update user
   * @apiVersion 1.0.0
   * @apiName UpdateUser
   * @apiGroup User
   * @apiPermission user:write
   *
   * @apiDescription Updates an user.
   *
   * @apiParam    {String}    name          User name.
   * @apiParam    {String}    username      User username.
   * @apiParam    {String}    password      User password.
   * @apiParam    {String}    about         User about.
   *
   * @apiExample Example usage:
   * curl -X PUT http://localhost:3000/v1/user/12345 -d name=NewName
   */
  async update(ctx) {
    debug(`updating user "${ctx.params.id}"`);

    const { id } = ctx.params;
    const { body } = ctx.request;

    await UserService.update(id, body);

    ctx.status = 204;
  },

  /**
   * @api {delete} /v1/user/:id Delete user
   * @apiVersion 1.0.0
   * @apiName DisableUser
   * @apiGroup User
   * @apiPermission user:write
   *
   * @apiDescription Disables an user.
   *
   * @apiParam {String} id User id.
   *
   * @apiExample Example usage:
   * curl -X DELETE http://localhost:3000/v1/user/12345
   */
  async disable(ctx) {
    debug(`disabling user "${ctx.params.id}"`);

    const { id } = ctx.params;

    await UserService.disable(id);

    ctx.status = 204;
  },
};

module.exports = UserController;
