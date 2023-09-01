const nilai = 7;
const kelulusan = nilai >= 7 ? "lulus" : "tidak lulus";
const danBenar = nilai >= 7 && "lulus";
const atauSalah = nilai < 7 || "gagal";
console.log(kelulusan, danBenar, atauSalah);

const nama = "ahmad";
const cekNama = nama == "ahmad" ? "benar" : "salah";
const ahmadBenar = nama == "ahmad" && "benar";
const ahmadSalah = nama == "abdul" || "salah";
console.log(cekNama, ahmadBenar, ahmadSalah);

let person = [
  {
    nama: "ahmad",
    umur: 20,
  },
  {
    nama: "abdul",
    umur: 21,
  },
  {
    nama: "siti",
    umur: 25,
  },
];

const personName = person.map((item) => item.nama);
const personAge = person.map((item) => item.umur);
console.log(personName, personAge);

const filterName = person
  .filter((item) => item.nama.length == 5)
  .map((item) => item.nama);
const filterAge = person
  .filter((item) => item.umur >= 21)
  .map((item) => item.nama);
console.log(filterName, filterAge);
