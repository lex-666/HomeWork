let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = {}; // 5
let count = 0;
let newArr = [];
for (const item of arr) {
    data[item] = data[item] ? data[item] + 1 : 1;     
}
const result = Object.keys(data).filter((item) => data[item] > 1);
//console.log(result); 

for (const i of result) {
  if (i > count) {
    count = i;
  }
  }
  let myArray = ['one', 'two', 'three'];
let newArray = myArray.filter(function(f) { return f !== 'two' });

console.log(newArray)
// for (const y of arr) {
//   if (y !== Number(count)) {  
//     arr.push(y);
//   }
// }
// console.log(arr);