const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const mongoose = require("mongoose");
const Disney = require("./models/disneyModel");

app.use(cors());
app.use(express.json());

app.post("/disneymood", async (req, res) => {
  const { body } = req;
  const { url, text, weirdness } = body;
  const response = await fetch(url);
  const data = await response.json();
  const document = new Disney({
    text,
    weirdness,
    gif: data.data.images.original.url,
  });
  await document.save();
  console.log(document);
  return res.status(201).send(data);
});

app.get("/disneyhistory", async (req, res) => {
  const disneyHx = await Disney.find({});
  res.status(200).send(disneyHx);
});

module.exports = app;
