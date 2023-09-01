import { dataTable } from "./moduleClass.js";

export const data = new dataTable({
  rowHead: ["No", "Nama", "Umur", "Asal"],
  rowData: [
    [1, "ahmad", 20, "jakarta"],
    [2, "abdul", 25, "bandung"],
    [3, "siti", 24, "garut"],
    [4, "ayu", 26, "tasik"],
    [5, "iis", 23, "banten"],
    [6, "budi", 19, "jogja"],
  ],
});
