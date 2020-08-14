const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use("/", require("./routes/get"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function(require, response) {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`news_index express/react/node project running @ port ${port}!`);
});