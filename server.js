const express = require("express");
const router = require("./routes/routes");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => console.log("Server is listening on port: ", PORT));
