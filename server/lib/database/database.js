const { MongoClient } = require("mongodb");
let db = null;

async function initDatabase() {
  const dbName = "patchfox";
  const url = `mongodb+srv://patchfox:<1910Bella89>@patchfox-wmgqp.mongodb.net/test?retryWrites=true&w=majority`;
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  db = client.db(dbName);
}

async function getCollection(collectionName) {
  try {
    if (!db) {
      await initDatabase();
    }
    return db.collection(collectionName);
  } catch (error) {
    console.error(`Thats the error: ${error}`);
    return console.error("Error");
  }
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
