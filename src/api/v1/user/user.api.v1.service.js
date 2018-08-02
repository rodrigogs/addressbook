const debug = require('debuggler')();
const User = require('./user.api.v1.model');
const InvalidUpdateFieldError = require('./exceptions/InvalidUpdateFieldError');
const ArrayUtil = require('../../../util/array.util');

const UserService = {
  async get(id) {
    debug('retrieving user', id);

    return User.findById(id).exec();
  },

  async find(query, limit = 10, sort) {
    debug('retrieving users', query);

    return User.find(query)
      .limit(limit)
      .sort(sort)
      .exec();
  },

  async findOne(query) {
    debug('retrieving user', query);

    return User.findOne(query).exec();
  },

  async create(user) {
    debug('creating user', user);

    user = new User(user);

    return user.save();
  },

  async update(id, updates) {
    debug('updating user', id);

    const updateableFields = [
      'name',
      'email',
      'about',
      'username',
      'password',
    ];

    Object.keys(updates).forEach((prop) => {
      if (!ArrayUtil.includes(updateableFields, prop)) throw new InvalidUpdateFieldError(prop);
    });

    return User.update({ _id: id }, { $set: updates });
  },

  async disable(id) {
    debug('disabling user', id);

    return User.update({ _id: id }, { $set: { active: false } });
  },
};

module.exports = UserService;
