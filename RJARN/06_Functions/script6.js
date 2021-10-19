// //rest parameters
// function sum(opName, ...theNumbers) {
//   console.log(opsName); //'sum'
//   return theNumbers.reduce((previous, current) => {
//     return previous + current;
//   });
// }
// console.log(sum("sum", 1, 2, 3)); //6
// console.log(sum("sum", 1, 2, 3, 4, 5)); //15

function sum(num1, num2, num3,num4,num5) {
  return num1 + num2 + num3 + num4 + num5;
}
let nums = ['J', '-O', '-M','-lOVE','-lacto basilus'];
//spread parameter
console.log(sum(...nums)); //40
