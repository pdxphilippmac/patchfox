const mongoose = require("mongoose");

const GamePostSchema = mongoose.Schema({
  id: { type: Number },
  title: { type: String },

  cover: {
    id: { type: Number },
    url: { type: String }
  }
});

module.exports = mongoose.model("GamePost", GamePostSchema);
