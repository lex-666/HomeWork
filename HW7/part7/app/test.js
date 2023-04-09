// На сторінці потрібно реалізувати 2 випадаючих списки.У першому містяться назви країн, у другому – назви міст.
//  Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому
//  випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript.
//  Також потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
                    
// <select name="cities" id="cities"></select>
// <p></p>

// https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png

const cities = {
    zero:[],
    ger: ["Berlin", "Munkhen", "Hamburg"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Kharkiv", "Odesa"]
  };

  const countrySelect = document.getElementById("country");
  const citiesSelect = document.getElementById("cities");
const result = document.getElementById("result");
  
  countrySelect.addEventListener("change", function() {
    citiesSelect.innerHTML = "";
    const selectedCountry = countrySelect.value;
    if (selectedCountry) {
      cities[selectedCountry].forEach(function(city) {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
      });
      result.textContent = countrySelect.options[countrySelect.selectedIndex].text + ", " + citiesSelect.options[citiesSelect.selectedIndex].text;
    } else {
      result.textContent = "";
    }
  });  
  citiesSelect.addEventListener("change", function() {
    result.textContent = countrySelect.options[countrySelect.selectedIndex].text + ", " + citiesSelect.options[citiesSelect.selectedIndex].text;
  });