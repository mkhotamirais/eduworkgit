const btn = document.getElementById("button-addon2");
let rlt = document.getElementById("results");
btn.addEventListener("click", function () {
  btn.querySelector("i").className = "fa fa-spinner fa-spin";
  hasil(rlt);
});

document.querySelector(".s-input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    btn.querySelector("i").className = "fa fa-spinner fa-spin";
    hasil(rlt);
  }
});

function hasil(rlt) {
  rlt.innerHTML = `<div class="text-center display-3">tunggu sebentar...</div>`;
  let key = document.querySelector(".s-input").value;
  document.querySelector(".s-input").value = "";
  setTimeout(() => {
    fetch(
      `https://newsapi.org/v2/${
        key == "" ? "top-headlines?country=us&" : "everything?"
      }apiKey=9c6131f2202d4dafb822bc76564f80c4&q=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        rlt.innerHTML = "";
        if (res.totalResults == 0) {
          rlt.innerHTML = "kosong";
        }
        res.articles.map((item) => {
          rlt.innerHTML += `
          <div class="col-lg-4 mb-3">
            <div class="card" style="width: 18rem">
              <img src="${
                item.urlToImage == null ? "" : item.urlToImage
              }" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.author} ${item.publishedAt}
                </p>
                <p class="card-text">${item.description}
                </p>
                <a href="${
                  item.url
                }" target="_blank" class="btn btn-primary">Lanjut baca...</a>
              </div>
            </div>
          </div>
          `;
        });
      })
      .catch(() => {})
      .finally(() => {
        btn.querySelector("i").className = "fa fa-search";
      });
  }, 500);
  // document.querySelector(".s-input").focus();
}
hasil(rlt);
