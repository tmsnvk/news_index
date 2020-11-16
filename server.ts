import express, { Request, Response } from "express";
import path from "path";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config();

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
  app.get("*", (request: Request, response: Response): void => {
    response.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const port = process.env.PORT as string || 3001 as number;
app.listen(port, (): void => console.log(`project-002a running @ port ${port}!`));