const isTypeOfNaN = (inputValue) => {
  if (Number.isNaN(inputValue) || isNaN(inputValue)) return true;
  return false;
};

const validatedValue = (inputValue) => {
  if (isTypeOfNaN(inputValue)) {
    throw new Error("숫자만 입력이 가능합니다. 숫자를 3자리로 입력해주세요.");
  }
  if (String(inputValue).includes("0")) {
    throw new Error("1부터 9까지의 숫자만 입력해주세요.");
  }
};

module.exports = validatedValue;
