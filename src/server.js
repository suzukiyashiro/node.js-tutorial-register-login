const express = require("express");
const app = express();
const helmet = require("helmet");
const mongoose = require("mongoose");

require("dotenv").config();

// ミドルウェア
app.use(helmet());

// MongoDB接続
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDBと接続中"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello node.js");
});

app.listen(3000, () => console.log("Server is running"));
