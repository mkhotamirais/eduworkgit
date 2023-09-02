const tableData = document.querySelector("tbody");
tableData.innerHTML = terror("loading...");

fetch("https://jsonplaceholder.typicode.co/users")
  .then((res) => res.json())
  .then((res) => tbody(res))
  .catch((err) => terror(err.message))
  .finally(() => {});

function tbody(res) {
  tableData.innerHTML = "";
  res.map((item) => {
    tableData.innerHTML += `
          <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.email}</td>
          </tr>
          `;
  });
}

function terror(err) {
  tableData.innerHTML = "";
  return (tableData.innerHTML = `
    <tr>
    <td class="text-center" colspan="3">${err}</td>
    </tr>
    `);
}
