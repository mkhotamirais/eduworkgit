const tbody = document.querySelector("tbody");

fetch(
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9c6131f2202d4dafb822bc76564f80c4"
)
  .then((res) => res.json())
  .then((res) => {
    res.articles.map((item) => {
      tbody.innerHTML += `
        <tr>
        <td>${item.author}</td>
        <td>${item.title}</td>
        </tr>
        `;
    });
    console.log(res.articles);
  });
