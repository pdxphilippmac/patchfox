const express = require("express");

const server = express();

//Routes

server.get("/Library", (req, res) => {
  res.send("we are on slash");
});

server.listen(3002);
