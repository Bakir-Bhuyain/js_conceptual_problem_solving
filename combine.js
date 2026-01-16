// const priceString = "15.50 tk";
// const quantity = 4;

// function calculateTotal(priceStr, qty) {
//       let price = parseFloat(priceStr);
//       let total = price * qty;
//       return total;
// }

// const totalCost = calculateTotal(priceString, quantity);
// console.log(totalCost);

const text = "Price: 500 tk";

function getPrice(str) {
  let parts = str.split(" ");
  let priceString = parts[1];
  return parseFloat(priceString);
}

// const price = getPrice(text);
// console.log(price);

const textToDigit = "Price:    500    tk";

function getPrice(values) {
  let part = values.split(" ");
  for (let value of part) {
    const givenStr = parseFloat(value);
    if (!isNaN (givenStr)) {
      return givenStr;
    }
  }
}
console.log(getPrice(textToDigit));
