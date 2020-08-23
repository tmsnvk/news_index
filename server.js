const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use("/", require("./routes/fetchData"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`news_index express/react/node project running @ port ${port}!`);
});