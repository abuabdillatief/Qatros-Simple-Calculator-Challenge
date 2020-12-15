const numDisplay = document.getElementById("numDisplay");
let status = false;

const insertNum = (params) => {
  let inserted = params.innerHTML;
  lastInput = numDisplay.innerHTML.split("")[numDisplay.innerHTML.length - 1];
  if (inserted == "=") {
    if (calculate(numDisplay.innerHTML)) {
      numDisplay.innerHTML = calculate(numDisplay.innerHTML);
      status = true;
    }
  } else if (inserted == "AC") {
    numDisplay.innerHTML = "0";
  } else {
    status === true ? ((numDisplay.innerHTML = "0"), (status = false)) : null;

    if (numDisplay.innerHTML === "0") {
      !isNaN(inserted) || inserted === "+" || inserted === "-"
        ? (numDisplay.innerHTML = inserted)
        : inserted === "."
        ? (numDisplay.innerHTML = `0.`)
        : null;
    } else {
      !isNaN(inserted) && inserted != "0"
        ? //Number Oriented
          (numDisplay.innerHTML += inserted)
        : inserted == "0" && lastNumFirstCharIsZero(numDisplay.innerHTML)
        ? null
        : inserted == "0" && !lastNumFirstCharIsZero(numDisplay.innerHTML)
        ? (numDisplay.innerHTML += inserted)
        : //Not A Number
        isOperator(inserted) && lastInput != " "
        ? (numDisplay.innerHTML += ` ${inserted} `)
        : inserted == "-" && lastInput == " "
        ? (numDisplay.innerHTML += inserted)
        : inserted === "." && (lastInput == " " || lastInput.length == 0)
        ? (numDisplay.innerHTML += `0.`)
        : inserted === "." && checkDot(numDisplay.innerHTML)
        ? null
        : (numDisplay.innerHTML += inserted);
    }
  }
};
