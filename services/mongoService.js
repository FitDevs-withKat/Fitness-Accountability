import { MongoClient } from "mongodb";
const uri = process.env.FITDEVS_CONNECTION_URL;
const client = new MongoClient(uri);

export default async function getUsers() {
  const database = client.db("fitdevs");
  const collection = database.collection("campaign_data");

  const query = {};
  const sort = { total: -1 };
  const result = collection.find(query).sort(sort);

  const allResults = await result.toArray();

  const sortedResults = allResults.map((result, index) => {
    return { total: result.total, username: result?.username, rank: index + 1 };
  });
  console.log(uri);
  return sortedResults;
}
