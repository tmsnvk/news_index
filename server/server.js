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

const baseLink = "https://newsapi.org/v2/top-headlines?";
const country = "country=";
const countryOptions = ["bg", "fr", "gb", "hu", "it", "kr", "jp", "se"];
const category = "category=";
const categoryOptions = ["general", "business", "technology", "science", "health", "entertainment"];
const apiKey = "apiKey=e2f31ffcb85c44bd856dbdc04bb78218";

app.get("/", async (req, res) => {
  res.redirect("/gb");
});

app.get("/bg", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}bg&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/fr", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}fr&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/gb", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}gb&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/hu", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}hu&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/it", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}it&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/kr", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}kr&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/jp", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}jp&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

app.get("/se", async (req, res) => {
  const response = await axios.get(`${baseLink}${country}se&${category}general&${apiKey}`);
  
    res.send(response.data.articles);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`news_index project @ port ${port}!`);
});