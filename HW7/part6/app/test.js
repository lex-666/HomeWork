// Реалізуйте програму, яка відслідковуватиме зміну розміру(ширини і висоти) вікна браузера і виводитиме на поточну
// сторінку при її розтязі / стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

function updateWindowSize() {
			document.getElementById("width").innerHTML = window.innerWidth;
			document.getElementById("height").innerHTML = window.innerHeight;
		}

window.addEventListener("resize", updateWindowSize);