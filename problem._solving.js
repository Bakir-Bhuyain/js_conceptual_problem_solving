//1. [ekta function er name dite hbe that is AnaToVori]: ekta function er parameter hishebe nibe (ana). then sheta ke vhori te convert kore koto man hoy shei sonkha return korbe . sudhu sonkhha ta return korbe.

function anaToVori(ana) {
      if (typeof(ana) !== "number" || ana < 0){
            return "provide a valid number";
      }

  const vori = 0.0625;

  const calcAnaToVori = ana * vori;
  return calcAnaToVori;
}
const total = anaToVori(3);
console.log(total);
