 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати
 //ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colors = document.querySelectorAll(".color");

colors.forEach((color) => {
  color.addEventListener("click", () => {   
    const price = color.getAttribute("data-price");    
    document.getElementById("outprice").innerHTML = price;    
    colors.forEach((c) => c.classList.remove("active"));    
    color.classList.add("active");
  });
});

