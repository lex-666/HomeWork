 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати
 //ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");

colors.forEach((color) => {
  color.addEventListener("click", () => {   
    const price = color.getAttribute("data-price");    
    document.getElementById("outprice").innerHTML = price;    
    colors.forEach((c) => c.classList.remove("active"));    
    color.classList.add("active");
  });
});

sizes.forEach((size) => {
  size.addEventListener("click", () => {   
    const price = size.getAttribute("data-price");    
    document.getElementById("outprice").innerHTML = price;    
    sizes.forEach((c) => c.classList.remove("active"));    
    size.classList.add("active");
  });
});


const colorSpans = document.querySelectorAll('.color');
colorSpans.forEach(colorSpan => {
  colorSpan.addEventListener('click', () => {
    colorSpans.forEach(span => span.classList.remove('active'));
    colorSpan.classList.add('active');
    const color = colorSpan.getAttribute('color');
    const shoeImages = document.querySelectorAll('.shoe');
    shoeImages.forEach(image => {
      if (image.getAttribute('color') === color) {
        image.classList.add('show');
      } else {
        image.classList.remove('show');
      }
    });
  });
});





