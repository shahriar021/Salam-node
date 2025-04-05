const { MongoClient } = require("mongodb");

const mongoDB_URL =
  "mongodb+srv://shahriar:shah%4012345678@deepnode.3xosx9i.mongodb.net/";

const client = new MongoClient(mongoDB_URL);
const dbName = "deepMongo";

async function main() {
  await client.connect();
  console.log("Connected successfully..");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    name: "bob",
    job: "data analytics",
    city: "sylhet",
  };

  //   const insertResult = await collection.insertOne(data);

  //   const updateResult = await collection.updateOne(
  //     { name: "bob" },
  //     { $set: { name: "bobita" } }
  //   );

  const deleteResult = await collection.deleteOne({ name: "bobita" });

  const findResult = await collection.find({}).toArray();
  console.log(findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
