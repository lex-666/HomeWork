//Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function validateCardNumber(cardNumber) {
  const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  return console.log(regex.test(cardNumber));
}

validateCardNumber("9999-9999-9999-9999");