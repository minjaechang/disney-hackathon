const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors());
app.use(express.json());

app.post("/disneymood", async (req, res) => {
  const { body } = req;
  const { url } = body;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  return res.status(201).send(data);
});

module.exports = app;
