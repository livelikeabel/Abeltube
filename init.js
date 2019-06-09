import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀  App listening on port ${PORT}!`);
});
