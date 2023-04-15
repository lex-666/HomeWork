// // JavaScript
// const createCupsLink = document.querySelector('#create-cups-link');
// const createCupsDialog = document.querySelector('#create-cups-dialog');
// const createCupsForm = document.querySelector('#create-cups-form');
// const productsList = document.querySelector('.products');

// // Edit dialog
// const editCupDialog = document.querySelector('#edit-cup-dialog');
// const editCupForm = document.querySelector('#edit-cup-form');
// const editNameInput = document.querySelector('#edit-name');
// const editColorInput = document.querySelector('#edit-color');
// const editVolumeInput = document.querySelector('#edit-volume');

// // Delete dialog
// const deleteCupDialog = document.querySelector('#delete-cup-dialog');
// const deleteConfirmButton = document.querySelector('#delete-cup-confirm');
// const deleteCancelButton = document.querySelector('#delete-cup-cancel');

// // Function to open the edit dialog
// function openEditDialog(product) {
//   // Get the current values of the product and populate the edit form
//   const nameValue = product.querySelector('.name-value');
//   const colorValue = product.querySelector('.color-value');
//   const volumeValue = product.querySelector('.volume-value');
//   editNameInput.value = nameValue.textContent;
//   editColorInput.value = colorValue.textContent;
//   editVolumeInput.value = volumeValue.textContent;

//   // Show the edit dialog
//   editCupDialog.showModal();

//   // Handle the submit event for the edit form
//   editCupForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // Update the values in the product
//     nameValue.textContent = editNameInput.value;
//     colorValue.textContent = editColorInput.value;
//     volumeValue.textContent = editVolumeInput.value;
//     // Close the edit dialog
//     editCupDialog.close();
//   });
// }

// // Function to open the delete dialog
// function openDeleteDialog(product) {
// // Show the delete dialog
// deleteCupDialog.showModal();

// // Handle the click event for the confirm button
// deleteConfirmButton.addEventListener('click', () => {
// // Remove the product
// product.remove();
// // Close the delete dialog
// deleteCupDialog.close();
// });

// // Handle the click event for the cancel button
// deleteCancelButton.addEventListener('click', () => {
// // Close the delete dialog
// deleteCupDialog.close();
// });
// }

// createCupsLink.addEventListener('click', () => {
// createCupsDialog.showModal();
// });

// createCupsForm.addEventListener('submit', (event) => {
// event.preventDefault();
// const name = document.querySelector('#name').value;
// const color = document.querySelector('#color').value;
// const volume = document.querySelector('#volume').value;

// const product = document.createElement('div');
// product.classList.add('card');

// // Create elements with the values and add them to the div
// const nameValue = document.createElement('p');
// nameValue.classList.add('name-value');
// nameValue.textContent = name;
// product.appendChild(nameValue);

// const colorValue = document.createElement('img');
// colorValue.classList.add('color-value');
// colorValue.src = 'img\\' + color;
// product.appendChild(colorValue);


// const volumeValue = document.createElement('p');
// volumeValue.classList.add('volume-value');
// volumeValue.textContent = volume;
// product.appendChild(volumeValue);

// const editButton = document.createElement('button');
// editButton.classList.add('card__button');
// editButton.textContent = 'Edit';
// editButton.addEventListener('click', () => {
// // Handle the click event for the edit button
// openEditDialog(product);
// });
// product.appendChild(editButton);

// const deleteButton = document.createElement('button');
// deleteButton.classList.add('card__button');
// deleteButton.textContent = 'Delete';
// deleteButton.addEventListener('click', () => {
// // Handle the click event for the delete button
// openDeleteDialog(product);
// });
// product.appendChild(deleteButton);

// productsList.appendChild(product);

// createCupsDialog.close();
// });




// JavaScript
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

function openEditDialog(product) {
  // Get the current values of the product and populate the edit form
  const nameValue = product.querySelector('.name-value');
  const colorValue = product.querySelector('.color-value');
  const volumeValue = product.querySelector('.volume-value');
  editNameInput.value = nameValue.textContent;
  editColorInput.value = colorValue.getAttribute('src');
  editVolumeInput.value = volumeValue.textContent;

  // Show the edit dialog
  editCupDialog.showModal();

  // Handle the submit event for the edit form
  editCupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Update the values in the product
    nameValue.textContent = editNameInput.value;
    colorValue.setAttribute('src', editColorInput.value);
    volumeValue.textContent = editVolumeInput.value;
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

    const volumeValue = document.createElement('p');
    volumeValue.classList.add('volume-value');
    volumeValue.textContent = volume;
    product.appendChild(volumeValue);

    const editButton = document.createElement('button');
    editButton.classList.add('card__button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      openEditDialog(product);
    });
    product.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card__button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      openDeleteDialog(product);
    });
    product.appendChild(deleteButton);

    productsList.appendChild(product);
  });

  // Read the selected file as a data URL
  reader.readAsDataURL(file);

  createCupsDialog.close();
});

