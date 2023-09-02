function halo(nama) {
  nama = nama;
  return () => console.log(nama);
}
halo("abdul")("ahmad");
