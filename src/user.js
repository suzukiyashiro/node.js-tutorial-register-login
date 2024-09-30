const router = require("express").Router();
const User = require("./model");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json("メールアドレスがありません");
    }
    const isVaild = user.password === req.body.password;
    if (!isVaild) {
      return res.status(400).json("パスワードが違います");
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
