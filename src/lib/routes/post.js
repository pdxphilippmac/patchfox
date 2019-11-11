const express = require("express");
const router = express.Router();
const Post = require("../models/GamePosts");

router.get("/Library", (req, res) => {
  res.send("GamePostsLibrary");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
