const mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let game = require("../models/GamePosts");

router.route("/create").post((req, res) => {
  game.create(req.body, (error, data) => {
    if (error) {
      return error;
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.route("/").get((req, res) => {
  game.find((error, data) => {
    if (error) {
      return error;
    } else {
      res.json(data);
    }
  });
});

router.route("/edit/:id").get((req, res) => {
  game.findById(req.params.id, (error, data) => {
    if (error) {
      return error;
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:id").put((req, res) => {
  game.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return error;
        console.log(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

router.route("/delete/:id").delete((req, res) => {
  game.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return error;
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = router;
