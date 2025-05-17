require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("bruhhhhhhhhhhhhhhh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to my new web app</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>TUNG TUNG TUNG TUNG SAHUR");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listining on port ${port}`);
});
