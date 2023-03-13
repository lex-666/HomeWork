let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = {};
let count = 0;
let newArr = [];
for (const item of arr) {
    data[item] = data[item] ? data[item] + 1 : 1;     
}
const result = Object.keys(data).filter((item) => data[item] > 1);
for (const i of result) {
  if (i > count) {
    count = i;
  }
  }
for (const y of arr) {
  if (y !== Number(count)) {  
    newArr.push(y);
  }
}
console.log(newArr);