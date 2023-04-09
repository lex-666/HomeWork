// Напишіть функцію, яка перевіряє правильність логіна.Правильний логін - рядок від 2 до 10 символів, що містить
// лише букви та числа, номер не може бути першим.Функція має приймати рядок і знаходити усі числа в цьому рядку,
//     включаючи числа з плаваючою комою(наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
// //1.1, 3

// checkLogin('ee1*1ret3');
// false
// //1, 1, 3

function checkLogin(login) {
  if (login.length < 2 || login.length > 10) {
    return false;
  }

  if (/^\d/.test(login)) {
    return false;
  }

  if (!/^[a-zA-Z0-9.]*$/.test(login)) {
    return false;
  }

  if (/\.{2}/.test(login)) {
    return false;
  }

  if (/\d\.\d/.test(login)) {
    return true;
  }

  return true;
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));