const debug = require('debuggler')();
const ContactService = require('./contact.api.v1.service');
const ContactSchema = require('./contact.api.v1.schema');
const InvalidContactSchemaError = require('./exceptions/InvalidContactSchemaError');
const JSONUtils = require('../../../util/json.util');

const ContactNormalizer = JSONUtils.normalize(ContactSchema);
const ContractValidator = JSONUtils.validate(ContactSchema);

const ContactController = {
  /**
   * @api {post} /v1/contact/ Create contact
   * @apiVersion 1.0.0
   * @apiName CreateContact
   * @apiGroup Contact
   * @apiPermission contact:write
   *
   * @apiDescription Creates a new contact.
   *
   * @apiExample Example usage:
   * curl -X POST http://localhost:3000/v1/contact -d name=myenv
   *
   * @apiParam  {String}  firstName   Contact first name.
   * @apiParam  {String}  lastName    Contact last name.
   * @apiParam  {String}  companyName Contact company name.
   * @apiParam  {String}  address     Contact address.
   * @apiParam  {String}  phone       Contact phone.
   * @apiParam  {String}  email       Contact email.
   *
   * @apiSuccess  {String}  firstName   Contact first name.
   * @apiSuccess  {String}  lastName    Contact last name.
   * @apiSuccess  {String}  companyName Contact company name.
   * @apiSuccess  {String}  address     Contact address.
   * @apiSuccess  {String}  phone       Contact phone.
   * @apiSuccess  {String}  email       Contact email.
   * @apiSuccess  {String}  createdAt   User creation date.
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
