//ekta array ache amder k oi array theke sobceye boro number ber korte hobe

function largestNumbers(values) {
  if (!Array.isArray(values)) {
    return "Please provide a valid array";
  } else {
    let max = values[0];
    for (let i = 1; i < values.length; i++) {
      if (typeof values[i] !== "number"){
            return 'all values should be number';
      }else{
            if (values[i] > max){
                  max = values[i];
            }
      }
    }
    return max;
  }
}

const numbers = [21, 25, 32, 35, 65, 44, 18, 65];
const total = largestNumbers(numbers);
console.log(total);
