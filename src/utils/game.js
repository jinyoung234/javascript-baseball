const validatedValue = require("../utils/validation");

const assignUserNumber = ({ inputValue, userNumbers, callback }) => {
 validatedValue(inputValue);
 userNumbers.splice(0, 3, ...inputValue.split("").map(Number));
 callback();
};

module.exports = { genCount, printCompareResult, assignUserNumber };
