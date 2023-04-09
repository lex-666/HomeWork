// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

let inputString = "jfjfjfjf Script";
let outputString = inputString.replace(/^(\w+)\s+(\w+)$/, "$2, $1");
console.log(outputString);
