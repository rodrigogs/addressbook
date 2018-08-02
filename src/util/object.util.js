class ObjectUtil {
  static isObject(obj) {
    return obj === Object(obj);
  }
}

module.exports = ObjectUtil;
