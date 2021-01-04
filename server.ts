import express, { Request, Response } from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const publicPath = path.join(__dirname, "..", "client/public");

const app = express();

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(compression());

app.use("/", require("./routes/fetchData"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (request: Request, response: Response) => response.sendFile(path.join(__dirname, "client/build", "index.html")));
}

const port: string | number = process.env.PORT || 3001;
app.listen(port, () => console.log(`===> project-002 server @ port ${port}! <===`));