const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

var todo = [];
app.post("/todo", (req, res) => {
  var content = req.body.content;
  var number = req.body.number;
  var dummy = {};
  dummy.content = content;
  dummy.number = number;
  todo.push(dummy);
  console.log(dummy);

  res.send(`text ${JSON.stringify(todo)}`);
});
todo = [];
app.get("/todo", (req, res) => {
  var title = req.body.title;
  var name = req.body.name;
  var dummy = {};
  dummy.title = title;
  dummy.name = name;
  todo.push(dummy);
  console.log(dummy);
  res.send(`send ${JSON.stringify(todo)}`);
});

app.get("/about", (req, res) => {
  var col = req.query.col;
  var number = 0;
  for (var i = 0; i < col; i++) {
    number = number + i;
  }
  res.send(`number is ${number}`);
});
app.get("/get", (req, res) => {
  var val = req.headers.val;
  var square = Number(val) ** 2;
  res.send(`square  ${square}, ${val}`);
});
app.get("/give", (req, res) => {
  var vall = req.body.vall;
  res.send(`hyy ${vall}`);
});
app.get("/names", (req, res) => {
  res.send(names);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
