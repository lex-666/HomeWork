const createCupsLink = document.querySelector('#create-cups-link');
const createCupsDialog = document.querySelector('#create-cups-dialog');
const createCupsForm = document.querySelector('#create-cups-form');
const productsList = document.querySelector('.products');

// Edit dialog
const editCupDialog = document.querySelector('#edit-cup-dialog');
const editCupForm = document.querySelector('#edit-cup-form');
const editNameInput = document.querySelector('#edit-name');
const editColorInput = document.querySelector('#edit-color');
const editVolumeInput = document.querySelector('#edit-volume');

// Delete dialog
const deleteCupDialog = document.querySelector('#delete-cup-dialog');
const deleteConfirmButton = document.querySelector('#delete-cup-confirm');
const deleteCancelButton = document.querySelector('#delete-cup-cancel');

// Load the products from LocalStorage or initialize an empty array
// let products = JSON.parse(localStorage.getItem('products')) || [];

// Function to save the products data to LocalStorage
function saveProducts() {
  localStorage.setItem('products', JSON.stringify(products));
}


function openEditDialog(product) {
  // Get the current values of the product and populate the edit form
  const nameValue = product.querySelector('.name-value');
  const colorValue = product.querySelector('.color-value');
  const volumeValue = product.querySelector('.volume-value');
  editNameInput.value = nameValue.textContent;
  editVolumeInput.value = volumeValue.textContent;

  // Display the current image in the form
  const editColorPreview = editCupDialog.querySelector('#edit-color-preview');
  editColorPreview.setAttribute('src', colorValue.getAttribute('src'));

  // Show the edit dialog
  editCupDialog.showModal();

  // Handle the file selection event for the edit form
  editColorInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const url = event.target.result;
      editColorPreview.setAttribute('src', url);
      // Save the image URL to LocalStorage
      const index = Array.from(productsList.children).indexOf(product);
      products[index].color = url;
      saveProducts();
    });
    reader.readAsDataURL(file);
  });

  // Handle the submit event for the edit form
  editCupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Update the values in the product
    nameValue.textContent = editNameInput.value;
    colorValue.setAttribute('src', editColorPreview.getAttribute('src'));
    volumeValue.textContent = editVolumeInput.value;
    // Update the products array and save the data to LocalStorage
    const index = Array.from(productsList.children).indexOf(product);
    products[index].name = editNameInput.value;
    products[index].volume = editVolumeInput.value;
    saveProducts();
    // Close the edit dialog
    editCupDialog.close();
  });

  // Handle the click event for the cancel button
  const cancelButton = editCupDialog.querySelector('#cancel-button');
  cancelButton.addEventListener('click', () => {
    // Close the edit dialog
    editCupDialog.close();
  });
}

// Function to open the delete dialog
function openDeleteDialog(product) {
  // Show the delete dialog
  deleteCupDialog.showModal();

  // Handle the click event for the confirm button
  deleteConfirmButton.addEventListener('click', () => {
    // Remove the product
    product.remove();
    // Update the products array and save the data to LocalStorage
    const index = Array.from(productsList.children).indexOf(product);
    products.splice(index, 1);
    saveProducts();
    // Close the delete dialog
    deleteCupDialog.close();
  });

  // Handle the click event for the cancel button
  deleteCancelButton.addEventListener('click', () => {
    // Close the delete dialog
    deleteCupDialog.close();
  });
}

createCupsLink.addEventListener('click', () => {
  createCupsDialog.showModal();
});

// Function to save data to LocalStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load the products from LocalStorage, or an empty array if there are no saved products
let products = JSON.parse(localStorage.getItem('products')) || [];


// ...

createCupsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const volume = document.querySelector('#volume').value;
  
  // Get the selected file from the input element
  const fileInput = document.querySelector('#color');
  const file = fileInput.files[0];

  // Create a FileReader to read the selected file
  const reader = new FileReader();

  // When the reader loads the file, set the source of the image and create the product element
  reader.addEventListener('load', () => {
    const product = document.createElement('div');
    product.classList.add('card', 'container');

    const nameValue = document.createElement('p');
    nameValue.classList.add('name-value');
    nameValue.textContent = name;
    product.appendChild(nameValue);

    const colorValue = document.createElement('img');
    colorValue.classList.add('color-value');
    colorValue.src = reader.result;
    product.appendChild(colorValue);
    
    // const volumeValue = document.createElement('div');
    // volumeValue.classList.add('volume__and--buttons');
    // const volumeP = document.createElement('p');
    // volumeP.classList.add('volume-value');
    // volumeP.textContent = volume;
    // volumeValue.appendChild(volumeP);
    // product.appendChild(volumeValue);

   
    // const buttonsContainer = document.createElement('div');
    // buttonsContainer.classList.add('buttons-container');

    // const editButton = document.createElement('button');
    // editButton.classList.add('card__button');
    // editButton.textContent = 'Edit';
    // editButton.addEventListener('click', () => {
    //   openEditDialog(product);
    // });
    // buttonsContainer.appendChild(editButton);

    // const deleteButton = document.createElement('button');
    // deleteButton.classList.add('card__button');
    // deleteButton.textContent = 'Delete';
    // deleteButton.addEventListener('click', () => {
    //   openDeleteDialog(product);
    // });
    // buttonsContainer.appendChild(deleteButton);

    // product.appendChild(buttonsContainer);








//   const volumeValue = document.createElement('div');
// volumeValue.classList.add('volume__and--buttons');
  
// const volumeContainer = document.createElement('div');
// volumeContainer.classList.add('volume-container');

// const volumeLabel = document.createElement('span');
//     volumeLabel.textContent = 'Cup volume: ';
//     volumeLabel.classList.add('cup__volume');
// volumeContainer.appendChild(volumeLabel);

// const volumeP = document.createElement('p');
// volumeP.classList.add('volume-value');
// volumeP.textContent = volume;

// const buttonsContainer = document.createElement('div');
// buttonsContainer.classList.add('buttons-container');

// const editButton = document.createElement('button');
// editButton.classList.add('card__button','search__btn', 'btn1', 'card__edit');
// editButton.textContent = 'Edit';
// editButton.addEventListener('click', () => {
//   openEditDialog(product);
// });

// const deleteButton = document.createElement('button');
// deleteButton.classList.add('card__button','search__btn', 'btn2','card__delete');
// deleteButton.textContent = 'Delete';
// deleteButton.addEventListener('click', () => {
//   openDeleteDialog(product);
// });

// buttonsContainer.appendChild(editButton);
// buttonsContainer.appendChild(deleteButton);

// volumeContainer.appendChild(volumeLabel);
// volumeContainer.appendChild(volumeP);

// volumeValue.appendChild(volumeContainer);
// volumeValue.appendChild(buttonsContainer);

// product.appendChild(volumeValue);


const volumeValue = document.createElement('div');
volumeValue.classList.add('volume__and--buttons');
  
const volumeContainer = document.createElement('div');
volumeContainer.classList.add('volume-container');

const volumeLabel = document.createElement('span');
volumeLabel.textContent = 'Cup volume: ';
volumeLabel.classList.add('cup__volume');
volumeContainer.appendChild(volumeLabel);

const volumeP = document.createElement('p');
volumeP.classList.add('volume-value');
volumeP.textContent = volume;
volumeContainer.appendChild(volumeP);

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');

const editButton = document.createElement('button');
editButton.classList.add('card__button', 'search__btn', 'btn1', 'card__edit');
editButton.textContent = 'Edit';
editButton.addEventListener('click', () => {
  openEditDialog(product);
});

const deleteButton = document.createElement('button');
deleteButton.classList.add('card__button', 'search__btn', 'btn2', 'card__delete');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {
  openDeleteDialog(product);
});

buttonsContainer.appendChild(editButton);
buttonsContainer.appendChild(deleteButton);

volumeValue.appendChild(volumeContainer);
volumeValue.appendChild(buttonsContainer);

product.appendChild(volumeValue);



    

    // Add the new product to the products array and save to LocalStorage
    products.push({
      name: name,
      color: reader.result,
      volume: volume
    });
    saveToLocalStorage('products', products);

    productsList.appendChild(product);
  });

  // Read the selected file as a data URL
  reader.readAsDataURL(file);

  createCupsDialog.close();
});


const sortSelect = document.querySelector('#sort-select');

sortSelect.addEventListener('change', () => {
  const selectedOption = sortSelect.value;
  const sortedProducts = sortProducts(selectedOption);
  updateProductsList(sortedProducts);
});

function sortProducts(sortOption) {
  const sortedProducts = [...products];
  switch (sortOption) {
    case 'name-asc':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'volume-asc':
      sortedProducts.sort((a, b) => a.volume - b.volume);
      break;
    case 'volume-desc':
      sortedProducts.sort((a, b) => b.volume - a.volume);
      break;
    default:
      break;
  }
  return sortedProducts;
}

function updateProductsList(sortedProducts) {
  // Remove all existing products from the product list
  productsList.innerHTML = '';
  // Add the sorted products to the product list
  sortedProducts.forEach((product) => {
    const productElement = createProductElement(product);
    productsList.appendChild(productElement);
  });
}

// const sortSelect = document.querySelector('#sort-select');
// const searchSortInput = document.querySelector('#search-input');

// sortSelect.addEventListener('change', () => {
//   const selectedOption = sortSelect.value;
//   const searchTerm = searchSortInput.value;
//   const filteredProducts = filterProducts(searchTerm);
//   const sortedProducts = sortProducts(selectedOption, filteredProducts);
//   updateProductsList(sortedProducts, searchTerm);
// });

// searchSortInput.addEventListener('input', () => {
//   const selectedOption = sortSelect.value;
//   const searchTerm = searchSortInput.value;
//   const filteredProducts = filterProducts(searchTerm);
//   const sortedProducts = sortProducts(selectedOption, filteredProducts);
//   updateProductsList(sortedProducts, searchTerm);
// });

// function filterProducts(searchTerm) {
//   return products.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// }

// function sortProducts(sortOption, products) {
//   const sortedProducts = [...products];
//   switch (sortOption) {
//     case 'name-asc':
//       sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case 'name-desc':
//       sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
//       break;
//     case 'volume-asc':
//       sortedProducts.sort((a, b) => a.volume - b.volume);
//       break;
//     case 'volume-desc':
//       sortedProducts.sort((a, b) => b.volume - a.volume);
//       break;
//     default:
//       break;
//   }
//   return sortedProducts;
// }

// function updateProductsList(sortedProducts, searchTerm) {
//   // Remove all existing products from the product list
//   productsList.innerHTML = '';
//   // Add the sorted and filtered products to the product list
//   sortedProducts.forEach((product) => {
//     const productElement = createProductElement(product);
//     productsList.appendChild(productElement);
//   });
//   // Display the search term above the product list
//   const searchInfo = document.createElement('p');
//   searchInfo.textContent = `Showing results for "${searchTerm}"`;
//   productsList.insertBefore(searchInfo, productsList.firstChild);
// }








function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.classList.add('card', 'container');

  const nameValue = document.createElement('p');
  nameValue.classList.add('name-value');
  nameValue.textContent = product.name;
  productElement.appendChild(nameValue);

  const colorValue = document.createElement('img');
  colorValue.classList.add('color-value');
  colorValue.src = product.color;
  productElement.appendChild(colorValue);
  
  const volumeValue = document.createElement('p');
  volumeValue.classList.add('volume-value');
  volumeValue.textContent = product.volume;
  productElement.appendChild(volumeValue);

  const editButton = document.createElement('button');
  editButton.classList.add('card__button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    openEditDialog(productElement);
  });
  productElement.appendChild(editButton);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('card__button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    openDeleteDialog(productElement);
  });
  productElement.appendChild(deleteButton);

  return productElement;
}

// Function to display the products in alphabetical order
function displayProductsAlphabetically() {
  // Sort the products array by name in alphabetical order
  products.sort((a, b) => a.name.localeCompare(b.name));
  // Clear the current list of products
  productsList.innerHTML = '';
  // Add each product to the list in alphabetical order
  products.forEach((product) => {
    const item = document.createElement('div');
    item.classList.add('card', 'container');
    const nameValue = document.createElement('p');
    nameValue.classList.add('name-value');
    nameValue.textContent = product.name;
    item.appendChild(nameValue);
    const colorValue = document.createElement('img');
    colorValue.classList.add('color-value');
    colorValue.src = product.color;
    item.appendChild(colorValue);

 
    
    const volumeValue = document.createElement('p');
    volumeValue.classList.add('volume-value');
    volumeValue.textContent = product.volume;
    item.appendChild(volumeValue);
    

    const editButton = document.createElement('button');
    editButton.classList.add('card__button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      openEditDialog(item);
    });
    item.appendChild(editButton);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card__button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      openDeleteDialog(item);
    });
    item.appendChild(deleteButton);
    productsList.appendChild(item);
  });
}

// // Add an event listener to the "My Cups" list item to display the products alphabetically
// const myCupsListItem = document.querySelector('.my__cups');
// myCupsListItem.addEventListener('click', () => {
//   displayProductsAlphabetically();
// });
// const myCupsButton = document.querySelector('.my__cups');
// const productsMy = document.querySelector('.products__list');

// myCupsButton.addEventListener('click', () => {
//   // Получаем список продуктов из LocalStorage
//   const savedProducts = JSON.parse(localStorage.getItem('products'));

//   // Сортируем список по name в алфавитном порядке
//   savedProducts.sort((a, b) => a.name.localeCompare(b.name));

//   // Убираем предыдущие продукты с экрана
//   productsList.innerHTML = '';

//   // Добавляем отсортированные продукты на экран
//   savedProducts.forEach((product) => {
//     const productElement = createProductElement(product);
//     productsList.appendChild(productElement);
//   });
// });
const myCupsButton = document.querySelector('.my__cups');
// const productsList = document.querySelector('.products__list');

myCupsButton.addEventListener('click', () => {
  // Получаем список продуктов из LocalStorage
  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

  // Убираем предыдущие продукты с экрана
  productsList.innerHTML = '';

  // Добавляем продукты на экран
  savedProducts.forEach((product) => {
    const productElement = createProductElement(product);
    productsList.appendChild(productElement);
  });

  // Сбрасываем прокрутку в начало списка
  productsList.scrollTo(0, 0);
});





const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('.search__btn');
const cancelButton = document.querySelector('.cancel__btn');
const resultVolume = document.querySelector('.result__search--volume');
//const allProducts = Array.from(productsList.children);

function searchProducts() {
  // Получаем значение из поля ввода
  const searchTerm = searchInput.value.toLowerCase();

  // Создаем пустой массив для отфильтрованных товаров
  const filteredProducts = [];
  // Сумма значений volume найденных продуктов
  let totalVolume = 0;

  // Проходимся по каждому товару в списке
  Array.from(productsList.children).forEach((product) => {
    const nameValue = product.querySelector('.name-value');
    const volumeValue = product.querySelector('.volume-value');

    // Проверяем, содержится ли искомое значение в названии или объеме товара
    if (nameValue.textContent.toLowerCase().includes(searchTerm) || volumeValue.textContent.toLowerCase().includes(searchTerm)) {
      filteredProducts.push(product);
       // Добавляем значение volume найденного продукта к сумме totalVolume
      totalVolume += parseFloat(volumeValue.textContent);
    }
  });

  // Очищаем список товаров на странице
  productsList.innerHTML = '';

  // Если отфильтрованный список не пустой, добавляем отфильтрованные товары на страницу
  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      productsList.appendChild(product);
    });
  } else {
    // Если отфильтрованный список пустой, показываем сообщение об отсутствии результатов
    const noResults = document.createElement('p');
    noResults.textContent = 'No results found.';
    productsList.appendChild(noResults);
  }
    // Добавляем текст "Total volume: " и сумму значений volume найденных продуктов в блок resultVolume
  resultVolume.textContent = `Total volume: ${totalVolume.toFixed(2)}`;
}

// Обработчик события для кнопки "Search"
searchButton.addEventListener('click', searchProducts);



// cancelButton.addEventListener('click', () => {
//   searchInput.value = '';
//   productsList.innerHTML = '';
//   const resultVolume = document.querySelector('.result__search--volume');
//   resultVolume.textContent = '';

//   const savedProducts = JSON.parse(localStorage.getItem('products'));
//   if (savedProducts && savedProducts.length) {
//     savedProducts.forEach((product) => {
//       const productElement = createProductElement(product);
//       productsList.appendChild(productElement);
//     });
//   }
// });

cancelButton.addEventListener('click', () => {
  searchInput.value = '';
  const resultVolume = document.querySelector('.result__search--volume');
  resultVolume.textContent = '';
});




