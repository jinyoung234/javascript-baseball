const isTypeOfNaN = (inputValue) => {
  if (Number.isNaN(inputValue)) return true;
  return false;
};

module.exports = { isTypeOfNaN };
