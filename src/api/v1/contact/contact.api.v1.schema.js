const ContactSchema = {
  title: 'Contact',
  type: 'object',
  additionalProperties: false,
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    companyName: {
      type: 'string',
    },
    address: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
    },
  },
  required: ['firstName', 'lastName', 'address', 'email', 'phone', 'createdAt'],
};

module.exports = ContactSchema;
