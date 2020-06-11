const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var debug = require("debug")("my-application");

// post请求获取参数的方案
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "junmet" && password === "123") {
    res.send({
      code: 200,
      msg: "登录成功",
      username: "junmet",
      token: "jkabsdfjkbsdiugf34789wr9y3rgjks2345b,amsdfdsfgh3468347834",
    });
  } else {
    res.send({
      code: 500,
      msg: "登录失败",
    });
  }
});

app.listen(3300, function() {
  debug("Express server listening on port" + 3300);
});
