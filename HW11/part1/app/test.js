// 11-1.
// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне
// значення затримки delay(в мс) і повертає Promise, який чекає задану кількість часу(використовуючи аргумент delay)
//  і завершується повідомленням message.
// Приклад застосування функції:
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);
// });

// Результат: через 2 сек в консолі виводиться "test promise"

function getPromise(message, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(message);
    }, delay);
  });
}

getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});
