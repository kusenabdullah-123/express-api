const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ name: "John Doe" });
});

app.get("/product", (req, res) => {
  res.status(200).json({ name: "Macbook Pro 16", price: "$50" });
});
app.post("/product", (req, res) => {
  res.status(200).json({ mehod: "post", body: req.body });
});
app.put("/product", (req, res) => {
  res.status(200).json({ mehod: "put", body: req.body });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
