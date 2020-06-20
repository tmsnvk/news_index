const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("adada")
});

app.get("/bg", async (req, res) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  
    console.log(response.data.name);
    res.send(response.data.name);

});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`news_index project @ port ${port}!`);
});