// const prescription = "Tab Napa 500mg two times daily";
// function wordFinder(words) {
//   if(words.includes('mg')){
//       return "found mg";
//   }else{
//       return 'word not found';;
//   }
  

// }
// console.log(wordFinder(prescription));

const prescription = "Tab Napa 500mg two times daily";
function findWord (words){
      let theWord = words.split(' ');
      let required = '';
      for (let word of theWord) {
        if (word.includes("mg")) {
          required = word;
        }
      }
      return required;
}
console.log(findWord(prescription));
