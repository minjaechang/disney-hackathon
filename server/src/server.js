// const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`API server started at http://localhost:${port}`);
});
