// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function upperCase(input) {   
  const regex = /^[A-Z]/;
  if (regex.test(input)) {
    return console.log("String's starts with uppercase character");
  } else {
    return console.log("String's not starts with uppercase character");
  }
}
upperCase('RegExp');
upperCase('regexp');