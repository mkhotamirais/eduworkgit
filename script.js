class Person {
  constructor(nama) {
    this.nama = nama;
  }
  call(nama) {
    console.log(nama, this.nama);
  }
}

new Person("ahmad").call("siti");
