// 10-5.
// Напишіть функцію mapBuilder(keysArray, valuesArrays), яка приймає два масиви однакової довжини.Використовуючи
// ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями
// Map - значення з другого масиву.Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"

function mapBuilder(keysArray, valuesArray) {
  const map = new Map();
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); 
console.log(map.get(2)); 
