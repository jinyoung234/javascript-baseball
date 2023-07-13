const { isTypeOfNaN } = require('../utils/validate');

class Validator {
  static validateNumber(value) {
    const isDuplicate = new Set(value).size !== 3;
    const userNumber = Number(value.join(''));
    const isIncorrectRules =
      value.includes('0') || value.length !== 3 || isTypeOfNaN(userNumber);
    if (isIncorrectRules)
      throw new Error('숫자 야구 규칙에 맞게 입력해주세요.');
    if (isDuplicate) throw new Error('서로 다른 숫자를 입력해주세요.');
  }
}

module.exports = Validator;
