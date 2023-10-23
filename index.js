const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/delay/:val", (req, res) => {
  const delay = (req.params.val ?? 1) * 1000;
  setTimeout(() => {
    res.send({
      delay: delay,
    });
  }, delay);
});

app.get("/teste", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
