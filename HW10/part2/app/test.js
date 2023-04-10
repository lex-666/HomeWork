// 10-2.
// Напишіть код в /* Ваш код */, щоб він працював
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let /* Ваш код */ = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2); 
console.log(age2); 
console.log(name4); 
console.log(age4); 
