import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello world!");
});

const handleListening = () => {
  console.log(`Lisiening on: http://localhost:${PORT}`);
};

app.listen(4000, handleListening);
