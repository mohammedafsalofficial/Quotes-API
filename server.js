const express = require("express");

const PORT = 3000 || process.env.PORT;

const app = express();

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log("Server is listening on port: ", PORT));
