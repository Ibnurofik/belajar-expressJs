const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send("ini string dari respon");
// });

// localhost:8080/cats - mengirim string

app.get("/", (req, res) => {
  res.send("This is homepage dengan nodemon yang sudah direvisi");
});

app.get("/cats", (req, res) => {
  res.send("This is cats page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});
app.get("/blog", (req, res) => {
  res.send("Ini halaman blog");
});

app.get("/blog/:judul", (req, res) => {
  const judulBlog = req.params.judul;
  res.send("Anda sedang membaca blog dengan judul: " + judulBlog);
});

app.get("/blog/:category/:judul/:author", (req, res) => {
  const { category, judul, author } = req.params;
  res.send(`Blog dengan kategori : ${category} | Author: ${author} | ${judul}`);
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>Tidak ada data yang dicari</h1>`);
  }
  res.send(`<h1>Search: ${q}</h1>`);
});

// app.get("/blog/:judul", (req, res) => {
//   const judulBlog = req.params.judul;
//   console.log(judulBlog);
//   res.send("Anda sedang membaca artikel: " + judulBlog);
// });

app.get("*", (req, res) => {
  res.send("halaman tidak ditemukan");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
