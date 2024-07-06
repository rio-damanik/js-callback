document.addEventListener("DOMContentLoaded", function () {
  fetchUsers(createTable);
});

function fetchUsers(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      callback(users);
    }
  };
  xhr.send();
}

function createTable(users) {
  const tableBody = document
    .getElementById("user-table")
    .getElementsByTagName("tbody")[0];
  const fragment = document.createDocumentFragment();

  users.forEach((user) => {
    const row = document.createElement("tr");

    const cellId = row.insertCell();
    const cellName = row.insertCell();
    const cellUsername = row.insertCell();
    const cellEmail = row.insertCell();
    const cellAddress = row.insertCell();
    const cellPhone = row.insertCell();
    const cellWebsite = row.insertCell();
    const cellCompany = row.insertCell();

    cellId.textContent = user.id;
    cellName.textContent = user.name;
    cellUsername.textContent = user.username;
    cellEmail.textContent = user.email;
    cellAddress.textContent = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
    cellPhone.textContent = user.phone;
    cellWebsite.textContent = user.website;
    cellCompany.textContent = user.company.name;

    fragment.appendChild(row);
  });

  tableBody.appendChild(fragment);
}
