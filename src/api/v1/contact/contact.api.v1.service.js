const debug = require('debuggler')();
const Contact = require('./contact.api.v1.model');

const ContactService = {
  async create(userId, contact) {
    debug('creating contact', contact, 'for user', userId);

    return Contact.create(userId, contact);
  },
};

module.exports = ContactService;
