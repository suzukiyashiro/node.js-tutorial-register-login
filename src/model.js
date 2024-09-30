const mongoose = require("mongoose");

// スキーマ定義
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
  },
});

module.exports = mongoose.model("User", UserSchema);
