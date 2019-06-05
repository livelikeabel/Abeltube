const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

function handleListening() {
  console.log(`Lisiening on: http://localhost:${PORT}`);
}

app.listen(4000, handleListening);
