const UserSchema = require('../user/user.api.v1.schema');
const TokenSchema = require('../token/token.api.v1.schema');

const UserTokenSchema = {
  title: 'UserToken',
  type: 'object',
  additionalProperties: false,
  properties: {
    _id: {
      type: 'string',
    },
    user: UserSchema,
    token: TokenSchema,
    createdAt: {
      type: 'string',
    },
  },
  required: ['_id', 'user', 'token', 'createdAt'],
};

module.exports = UserTokenSchema;
