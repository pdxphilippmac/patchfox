require("dotenv").config();
const express = require("express");
const { getCollection, initDatabase } = require("./server/database");
const path = require("path");
const app = express();

app.use(express.json());

app.get(`/api/games`, async (request, response) => {
  try {
    const gameName = await getGames();
    return response.json(gameName);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return response.status(404).end("Error");
  }
});

async function getGames() {
  const gamesCollection = await getCollection();
  const games = await gamesCollection.find({}).toArray();

  if (!games) {
    throw new Error("can't find games");
  }
  return games;
}

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
initDatabase(process.env.DB_URL, process.env.DB_NAME).then(() => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
