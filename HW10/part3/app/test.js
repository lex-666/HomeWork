// 10-3.
// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(/* ваш код */) {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

function mul(...args) {
  const numbers = args.filter(arg => typeof arg === 'number');
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
  }
}

console.log(mul(1, "str", 2, 3, true)); 
console.log(mul(null, "str", false, true)); 