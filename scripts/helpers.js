const checkDot = (input) => {
  let lastNum = input.split(" ").slice(-1)[0];
  return lastNum.includes(".");
};

const lastNumFirstCharIsZero = (input) => {
  let lastNum = input
    .split(" ")
    .filter((el) => !isNaN(el))
    .slice(-1)[0];
  if (lastNum.charAt(0) === "0") {
    return true;
  }
  return false;
};

const isOperator = (input) => {
  let operator = ["+", "-", "/", "*"];
  return operator.some((el) => el == input);
};

const calculate = (input) => {
  let lastChar = input.charAt(input.length - 1);
  if (isOperator(lastChar) || lastChar == " ") {
    return false;
  } else if (!isNaN(lastChar)) {
    return eval(input);
  } else false;
};
