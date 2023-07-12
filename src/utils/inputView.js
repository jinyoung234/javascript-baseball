const { Console } = require("@woowacourse/mission-utils");
const validatedValue = require("./validation");

const handleInputValue = (param, callback) => function (inputValue) {
  callback({ ...param, inputValue });
 };

const assignUserNumber = ({ inputValue, userNumbers, callback }) => {
 validatedValue(inputValue);
 userNumbers.splice(0, 3, ...inputValue.split("").map(Number));
 callback();
};

const processValue = ({ inputValue, start }) => {
 if (inputValue === "1") {
  start();
  return;
 }
 if (inputValue === "2") {
  Console.close();
 }
};

module.exports = { handleInputValue, assignUserNumber, processValue };
