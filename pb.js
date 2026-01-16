function largestNumber(values) {
  if (!Array.isArray(values)) {
    return "provide a valid array";
  } else {
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
      if (typeof values[i] !== "number") {
        return "please provide a valid number";
      } else {
        if (max < values[i]) {
          max = values[i];
        }
      }
    }

    return max;
  }
}

const numbers = [21, 25, 32, 35, 65, 44, 18, 65];

const total = largestNumber(numbers);
console.log(total);
