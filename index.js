const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send("ini string dari respon");
// });

// localhost:8080/cats - mengirim string

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/cats", (req, res) => {
  res.send("This is cats page");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/blog/:judul", (req, res) => {
  res.send("Ini halaman blog");
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
