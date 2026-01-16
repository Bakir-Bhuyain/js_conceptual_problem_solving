const hummus = function (factor) {
  // এটা হেড শেফের এলাকা।
  // 'factor' হলো শেফের নির্দেশ। ধরুন factor = 2 (মানে ডবল রান্না হবে)।

  const ingredient = function (amount, unit, name) {
    // এটা সহকারীর ছোট্ট টেবিল (Inner Scope)।

    // সহকারী শেফের দিকে তাকিয়ে দেখল 'factor' কত? দেখল 2।
    // তাই সে নিজের হিসাব করল: amount * factor
    let ingredientAmount = amount * factor;

    // যদি ১ এর বেশি হয়, তাহলে "cup" কে "cups" বানাবে (plural)
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  // শেফ এবার সহকারীকে হুকুম দিচ্ছে
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");
};
hummus(5);