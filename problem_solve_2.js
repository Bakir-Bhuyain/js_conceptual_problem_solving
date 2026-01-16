/* 
[function nite hobe pandaCost] : 3 ta parameter lagbe.
    1 ta singara er dam hocche-- 7 tk
    1 ti somusa er dam hocche -- 10 tk
    1 ti jilapir dam hocche -- 15 tk
    ekhn she jodi  koyekta kore singara somusa and jlapi khay tahole total koto tk khorch hobe shei sonkha return korbe; 
*/

function pandaCost(quantity1, quantity2, quantity3) {
  const singara = 7;
  const somusa = 10;
  const jilapi = 15;

  if (
    typeof quantity1 !== "number" ||
    typeof quantity2 !== "number" ||
    typeof quantity3 !== "number"
  ) {
    return "please input a valid number";
  } else if (singara < 0 || somusa < 0 || jilapi < 0) {
    return "all parameters must be positive value";
  } else {
    const totalSingaraPrice = quantity1 * singara;
    const totalSomusaPrice = quantity2 * somusa;
    const totalJilapiPrice = quantity3 * jilapi;
    console.log(totalJilapiPrice);

    const totalCost = totalSingaraPrice + totalSomusaPrice + totalJilapiPrice;
    return totalCost;
  }
}

console.log(pandaCost(4, 8, 5));
