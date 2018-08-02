const firebase = require('../../../../config/firebase');

const ContactModel = {
  create(userId, contact) {
    return firebase.ref(`contacts/${userId}`).set(contact);
  },
};

module.exports = ContactModel;
