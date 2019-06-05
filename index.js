import express from "express";
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

const handleListening = () => {
  console.log(`Lisiening on: http://localhost:${PORT}`);
};

app.listen(4000, handleListening);
