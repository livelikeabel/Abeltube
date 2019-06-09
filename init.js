import "./db";
import app from "./app";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`🚀  App listening on port ${PORT}!`);
});
