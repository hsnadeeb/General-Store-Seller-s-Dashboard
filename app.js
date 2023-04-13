// const form = document.getElementById('my-form');
// const nameInput = document.getElementById('name');
// const descriptionInput = document.getElementById('description');
// const priceInput = document.getElementById('price');
// const quantityInput = document.getElementById('quantity');
// const tableBody = document.querySelector('table#my-table tbody');
// let data = [];

// window.addEventListener('DOMContentLoaded', () => {
//   axios
//     .get(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo`)
//     .then((response) => {
//       console.log(response);
//       data = response.data;
//       displayUserData();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const userData = {
//     ItemName: nameInput.value,
//     ItemDescription: descriptionInput.value,
//     ItemPrice: priceInput.value,
//     ItemQuantity: quantityInput.value,
//   };
//   axios
//     .post(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo`, userData)
//     .then((response) => {
//       console.log(response);
//       data.push(response.data);
//       displayUserData();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   form.reset();
//   displayUserData();
//   location.reload();
// });



// function displayUserData() {
//   tableBody.innerHTML = '';
//   for (let i = 0; i < data.length; i++) {
//     const userData = data[i];
//     const row = document.createElement('tr');
//     for (const property in userData) {
//       const cell = document.createElement('td');
//       cell.textContent = userData[property];
//       row.appendChild(cell);
//     }

//     const additem1cell = document.createElement('td');
//     const additem1 = document.createElement('button');
//     const additem2cell = document.createElement('td');
//     const additem2 = document.createElement('button');
//     const additem3cell = document.createElement('td');
//     const additem3 = document.createElement('button');

//     additem1.id = 'additem1-button';
//     additem2.id = 'additem2-button';
//     additem3.id = 'additem3-button';
//     additem1.textContent = 'Add 1 Item';
//     additem2.textContent = 'Add 2 Items';
//     additem3.textContent = 'Add 3 Items';


//     additem1.setAttribute('data-id', userData._id);
//   additem2.setAttribute('data-id', userData._id);
//   additem3.setAttribute('data-id', userData._id);


//   additem1.addEventListener('click', function () {
//     const rowIndex = Array.from(tableBody.children).indexOf(row);
//     const userId = userData._id;
//     const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 1));

//     axios
//       .put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
//         // _id: userData._id,
//         ItemName: userData.ItemName,
//         ItemDescription: userData.ItemDescription,
//         ItemPrice: userData.ItemPrice,
//         ItemQuantity: updatedQuantity
//       })
//       .then((response) => {
//         console.log(response);
//         data[i] = response.data;
//         displayUserData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       location.reload();
//   });

//   additem2.addEventListener('click', function () {
//     const rowIndex = Array.from(tableBody.children).indexOf(row);
//     const userId = userData._id;
//     const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 2));

//     axios
//       .put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
//         // _id: userData._id,
//         ItemName: userData.ItemName,
//         ItemDescription: userData.ItemDescription,
//         ItemPrice: userData.ItemPrice,
//         ItemQuantity: updatedQuantity
//       })
//       .then((response) => {
//         console.log(response);
//         data[i] = response.data;
//         displayUserData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       location.reload();
//   });

//   additem3.addEventListener('click', function () {
//     const rowIndex = Array.from(tableBody.children).indexOf(row);
//     const userId = userData._id;
//     const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 3));

//     axios
//       .put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
//         // _id: userData._id,
//         ItemName: userData.ItemName,
//         ItemDescription: userData.ItemDescription,
//         ItemPrice: userData.ItemPrice,
//         ItemQuantity: updatedQuantity
//       })
//       .then((response) => {
//         console.log(response);
//         data[i] = response.data;
//         displayUserData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       location.reload();
//   });

//       additem1cell.appendChild(additem1);
//       additem2cell.appendChild(additem2);
//       additem3cell.appendChild(additem3);
//       row.appendChild(additem1cell);
//       row.appendChild(additem2cell);
//       row.appendChild(additem3cell);
//       tableBody.appendChild(row);
//     }
// }



const form = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const tableBody = document.querySelector('table#my-table tbody');
let data = [];

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo`);
    console.log(response);
    data = response.data;
    displayUserData();
  } catch (error) {
    console.log(error);
  }
});

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userData = {
    ItemName: nameInput.value,
    ItemDescription: descriptionInput.value,
    ItemPrice: priceInput.value,
    ItemQuantity: quantityInput.value,
  };
  try {
    const response = await axios.post(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo`, userData);
    console.log(response);
    data.push(response.data);
    displayUserData();
  } catch (err) {
    console.log(err);
  }
  form.reset();
  displayUserData();
  location.reload();
});

function displayUserData() {
  tableBody.innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const userData = data[i];
    const row = document.createElement('tr');
    for (const property in userData) {
      const cell = document.createElement('td');
      cell.textContent = userData[property];
      row.appendChild(cell);
    }


    const additem1cell = document.createElement('td');
    const additem1 = document.createElement('button');
    const additem2cell = document.createElement('td');
    const additem2 = document.createElement('button');
    const additem3cell = document.createElement('td');
    const additem3 = document.createElement('button');

    additem1.id = 'additem1-button';
    additem2.id = 'additem2-button';
    additem3.id = 'additem3-button';
    additem1.textContent = 'Add 1 Item';
    additem2.textContent = 'Add 2 Items';
    additem3.textContent = 'Add 3 Items';


    additem1.setAttribute('data-id', userData._id);
    additem2.setAttribute('data-id', userData._id);
    additem3.setAttribute('data-id', userData._id);

    additem1.addEventListener('click', async () => {
      const rowIndex = Array.from(tableBody.children).indexOf(row);
      const userId = userData._id;
      const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 1));
      try {
        const response = await axios.put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
          ItemName: userData.ItemName,
          ItemDescription: userData.ItemDescription,
          ItemPrice: userData.ItemPrice,
          ItemQuantity: updatedQuantity
        });
        console.log(response);
        data[i] = response.data;
        displayUserData();
      } catch (error) {
        console.log(error);
      }
      location.reload();
    });

    additem2.addEventListener('click', async () => {
      const rowIndex = Array.from(tableBody.children).indexOf(row);
      const userId = userData._id;
      const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 2));
      try {
        const response = await axios.put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
          ItemName: userData.ItemName,
          ItemDescription: userData.ItemDescription,
          ItemPrice: userData.ItemPrice,
          ItemQuantity: updatedQuantity
        });
        console.log(response);
        data[i] = response.data;
        displayUserData();
      } catch (error) {
        console.log(error);
      }
      location.reload();
    });


    additem3.addEventListener('click', async () => {
      const rowIndex = Array.from(tableBody.children).indexOf(row);
      const userId = userData._id;
      const updatedQuantity = Math.max(0,(parseInt(userData.ItemQuantity) - 3));
      try {
        const response = await axios.put(`https://crudcrud.com/api/fd60108fe98e4dc4b0fb08ba5030320c/StoreItemInfo/${userId}`, {
          ItemName: userData.ItemName,
          ItemDescription: userData.ItemDescription,
          ItemPrice: userData.ItemPrice,
          ItemQuantity: updatedQuantity
        });
        console.log(response);
        data[i] = response.data;
        displayUserData();
      } catch (error) {
        console.log(error);
      }
      location.reload();
    });


      additem1cell.appendChild(additem1);
      additem2cell.appendChild(additem2);
      additem3cell.appendChild(additem3);
      row.appendChild(additem1cell);
      row.appendChild(additem2cell);
      row.appendChild(additem3cell);
      tableBody.appendChild(row);
  }
}
