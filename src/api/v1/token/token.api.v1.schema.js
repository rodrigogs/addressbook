const TokenSchema = {
  title: 'Token',
  type: 'object',
  additionalProperties: false,
  properties: {
    _id: {
      type: 'string',
      required: true,
    },
    accessToken: {
      type: 'string',
      required: true,
    },
    refreshToken: {
      type: 'string',
      required: true,
    },
    active: {
      type: 'boolean',
      required: true,
    },
    duration: {
      type: 'number',
      required: true,
    },
    scopes: {
      type: 'array',
      items: {
        type: 'string',
      },
      required: true,
    },
    createdAt: {
      type: 'string',
      required: true,
    },
    updatedAt: {
      type: 'string',
      required: true,
    },
  },
};

module.exports = TokenSchema;
