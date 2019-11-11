const { ObjectID } = require("mongodb");
const express = require("express");
const { initDatabase, getCollection } = require("./database");
const app = express();

const port = 8080;

const articlesCollectionName = "library";

app.use(express.json());

app.get(`/posts`, async (request, response) => {
  try {
    const games = await getGames();
    return response.json(games);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getGames() {
  const gameCollection = await getCollection(articlesCollectionName);
  const games = await gameCollection.find({}).toArray();

  if (!games) {
    throw new Error("Can not find games");
  }

  return games;
}

app.get(`/api/games/:id`, async (request, response) => {
  try {
    const gameId = request.params.id;
    const game = await getGame(gameId);
    return response.json(game);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function getGame(gameId) {
  const gameCollection = await getCollection(articlesCollectionName);
  const objectId = new ObjectID.createFromHexString(gameId);
  const game = await gameCollection.findOne({ _id: objectId });

  if (!game) {
    throw new Error("Can not find games");
  }

  return game;
}

app.patch(`/api/games/:id`, async (request, response) => {
  try {
    const gameId = request.params.id;
    const updates = request.body;
    const updatedArticle = await updateArticle(gameId, updates);
    return response.json(updatedArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function updateArticle(gameId, updates) {
  const gameCollection = await getCollection(articlesCollectionName);
  const game = await gameCollection.updateOne(
    { _id: ObjectID(gameId) },
    { $set: updates }
  );

  if (!game) {
    throw new Error("Can not find games");
  }

  return game;
}

app.post(`/api/games`, async (request, response) => {
  try {
    console.log(request);
    console.log(request.body);
    const newArticle = await setArticle(request.body);
    return response.json(newArticle);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.end("Error");
  }
});

async function setArticle(game) {
  const gameCollection = await getCollection(articlesCollectionName);
  const result = await gameCollection.insertOne({ ...game });

  return result;
}

initDatabase().then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server listens on http://localhost:${port}`);
});
