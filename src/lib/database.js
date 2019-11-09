
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://patchfox:<1910Bella89>@patchfox-wmgqp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {  useNewUrlParser: true,
    useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("patchfox").collection("library");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});


