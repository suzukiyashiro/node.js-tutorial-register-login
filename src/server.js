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

// スキーマ定義
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    },
})

// モデル定義
const User = mongoose.model('User', UserSchema)


// app.get("/", (req, res) => {
//   res.send("hello node.js");
// });

app.listen(3000, () => console.log("Server is running"));
