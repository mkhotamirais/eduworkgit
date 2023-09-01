import { data } from "./moduleData.js";

const rowHead = document.getElementById("rowHead");
for (const dt of data.name.rowHead) {
  const th = document.createElement("th");
  th.append(dt);
  rowHead.appendChild(th);
}
const rowBody = document.getElementById("rowBody");
data.name.rowData.map((item) => {
  rowBody.innerHTML += `
  <td>${item[0]}</td>
  <td>${item[1]}</td>
  <td>${item[2]}</td>
  <td>${item[3]}</td>
  `;
});
