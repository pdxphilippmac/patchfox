const express = require("express");

const GamePost = mongoose.model("games");

const mongoose = require("mongoose");

module.exports = app => {
  app.get(`/api/game`, async (req, res) => {
    let games = await GamePost.find();
    return res.status(200).send(games);
  });

  app.post(`/api/game`, async (req, res) => {
    let game = await GamePost.create(req.body);
    return res.status(201).send({
      error: false,
      game
    });
  });

  app.put(`/api/game/:id`, async (req, res) => {
    const { id } = req.params;

    let game = await GamePost.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      game
    });
  });

  app.delete(`/api/game/:id`, async (req, res) => {
    const { id } = req.params;

    let game = await GamePost.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      game
    });
  });
};
