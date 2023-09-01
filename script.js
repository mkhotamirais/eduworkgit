function ambilData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      return callback(JSON.parse(this.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const data = ambilData("https://jsonplaceholder.typicode.com/users", (data) => {
  console.log(data);
});
