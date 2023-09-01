const arr = ["satu", "dua", "tiga", ["empat", "lima", "enam"]];
const [a, b, ...c] = arr;
const [aa, bb, cc, dd] = arr;
console.log(arr[0], arr[1], arr[2], arr[3], arr[3][0]);
console.log(a, b, c);
console.log(aa, bb, cc, dd[0]);

function callArr([a, b, c, d, e = "tujuh"]) {
  console.log(a, b, c, d[1], e);
}
callArr(arr);

const objek = {
  nama: "ahmad",
  umur: 20,
  ibu: {
    nama: "siti",
    umur: 45,
  },
};
const {
  nama: n1,
  umur: u1,
  ibu: { nama: n2, umur: u2 },
} = objek;
console.log(`Nama ${n1} umur ${u1}, Ibu ${n2} umurnya ${u2}`);

function callObj({ nama: n, umur: u, kota = "jakarta", ibu }) {
  console.log(n, u, kota, ibu.nama, ibu.umur);
}
callObj(objek);
