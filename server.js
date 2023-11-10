const express = require("express");
const router = require("./routes/routes");

const PORT = 3000 || process.env.PORT;

const app = express();

app.use("/api", router);

app.listen(PORT, () => console.log("Server is listening on port: ", PORT));
