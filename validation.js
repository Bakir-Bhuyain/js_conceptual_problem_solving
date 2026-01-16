// function add(x, y){
//       if (typeof x !== "number" || typeof y !== "number"){
//             return "thik thak number de";
//       }
//       return x + y;
// }
// console.log(add(4, 8));

// function mult (x, y){
//       if (typeof x !== "number" || typeof y !== "number"){
//             return "please give a valid number!";
//       }
//       return x - y;
// }
// console.log(mult(4, 4));

// function divide (){}

//ekta function thakbe jeta ejta object receive korbe then,object er upor depend kore object er value gula add kore dibe
function details(info) {
  if (typeof info !== "object") {
    return "thik thak object deo";
  } else if (!info.name || !info.age) {
    return "put a valid object";
  } else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return "name should be sting and age should be a number";
  }else if (info.age <= 0){
      return "age should be a positive number";
  }

  return `My name is : ${info.name}. my age is ${info.age}`;
}
console.log(details({ name: "bakir", age: 26 }));
