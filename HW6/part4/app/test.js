// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const inputs = document.querySelectorAll(".arr");
const button = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

button.addEventListener("click", () => {
  let outText = "";
  for (let i = 0; i < inputs.length; i++) {
    outText += `${inputs[i].dataset.form}: ${inputs[i].value}\n`;
  }
  outBlock.textContent = outText;
});

