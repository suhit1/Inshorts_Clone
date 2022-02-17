import mongoose from "mongoose";

const Connection = async () => {
  try {
    const URL = `mongodb://admin-Suhit:Suhit1234@cluster0-shard-00-00.eld7f.mongodb.net:27017,cluster0-shard-00-01.eld7f.mongodb.net:27017,cluster0-shard-00-02.eld7f.mongodb.net:27017/news?ssl=true&replicaSet=atlas-x5b6br-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connection successful");
  } catch (error) {
    console.log("Error while connecting", error);
  }
};

export default Connection;

//jhjhjhj
