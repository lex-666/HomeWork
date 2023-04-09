// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

function checkEmail(email) {
  const regex = /^[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  if (regex.test(email)) {
    return console.log("Email is correct!");
  } else {
    return console.log("Email is not correct!");
  }
}

checkEmail('my_mail@gmail.com'); 
checkEmail('#my_mail@gmail.com'); 
checkEmail('my_ma--il@gmail.com'); 
