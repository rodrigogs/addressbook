const debug = require('debuggler')();
const ContactService = require('./contact.api.v1.service');
const ContactSchema = require('./contact.api.v1.schema');
const InvalidContactSchemaError = require('./exceptions/InvalidContactSchemaError');
const JSONUtils = require('../../../util/json.util');

const ContactNormalizer = JSONUtils.normalize(ContactSchema);
const ContractValidator = JSONUtils.validate(ContactSchema);

const ContactController = {
  /**
   */
  async create(ctx) {
    debug('creating contact', ctx.request.body);

    const { body } = ctx.request;
    const { user } = ctx.state.user;

    body.createdAt = new Date().toISOString();
    const errors = ContractValidator(body);
    if (errors) {
      throw new InvalidContactSchemaError(errors);
    }

    await ContactService.create(user._id, body);

    ctx.status = 201;
    ctx.body = ContactNormalizer(body);
  },
};

module.exports = ContactController;
