const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use(express.json());
app.use("/", (res) => {
  console.log("hello");
});
app.listen(8000, () => {
  console.log("Server is running !!!");
});
