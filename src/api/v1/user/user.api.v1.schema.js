const UserSchema = {
  title: 'User',
  type: 'object',
  additionalProperties: false,
  properties: {
    _id: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
      minimum: 4,
      maximum: 80,
    },
    email: {
      type: 'string',
      required: true,
      minimum: 5,
      maximum: 320,
    },
    about: {
      type: 'string',
      required: true,
      minimum: 5,
      maximum: 300,
    },
    username: {
      type: 'string',
      required: true,
      minimum: 4,
      maximum: 15,
    },
    active: {
      type: 'boolean',
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

module.exports = UserSchema;
