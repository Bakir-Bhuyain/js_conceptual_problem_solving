let x = 10; // global
if (true) {
  let y = 20; // local to block
  var z = 30; // also global
}


const halve = function(n) {
return n / 2;
};
61
let n = 10;
// console.log(halve(100));
// → 50
// console.log(n);
// → 10

// ১. এটা হলো বাইরের জগত (Global Scope)
let hero = "Super Man"; 
let power = 100;

if (true) {
    // ২. এটা একটা নতুন জগত বা ব্লক (Local Scope)
    
    // বাইরে "hero" আছে, কিন্তু এখানে আমরা নতুন করে "hero" বানালাম
    let hero = "Bat Man"; 
    
    // এখানে নতুন একটা ভেরিয়েবল বানালাম যা শুধু এখানেই থাকবে
    let secretWeapon = "Bat Mobile"; 

    console.log("ব্লকের ভেতরে Hero:", hero); 
    // আউটপুট হবে: "Bat Man" 
    // (কারণ সে তার নিজের ব্লকের ভেরিয়েবলকেই প্রাধান্য দেয়, বাইরেরটাকে নয়)

    console.log("ব্লকের ভেতরে Power:", power); 
    // আউটপুট হবে: 100
    // (নিজের কাছে 'power' নেই, তাই সে উঁকি দিয়ে বাইরেরটা ব্যবহার করছে)
}

// ৩. ব্লকের কাজ শেষ, এখন আমরা আবার বাইরের জগতে

console.log("বাইরে Hero:", hero); 
// আউটপুট হবে: "Super Man"
// (ভেতরের ব্লকে কী হয়েছে তা বাইরের জগত জানে না, তাই বাইরের ভেরিয়েবল চেঞ্জ হয়নি)

// console.log(secretWeapon); 
// এই লাইনটি আন-কমেন্ট (uncomment) করলে এরর খাবেন!
// কারণ: ভেতরের গোপন জিনিস (Local Variable) বাইরে থেকে দেখা যায় না।