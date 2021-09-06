import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.mongodb_username);
  // const db = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mejpo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const db = `mongodb://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}-shard-00-00.mejpo.mongodb.net:27017,${process.env.mongodb_clustername}-shard-00-01.mejpo.mongodb.net:27017,${process.env.mongodb_clustername}-shard-00-02.mejpo.mongodb.net:27017/${process.env.mongodb_database}?ssl=true&replicaSet=atlas-127vck-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err, "******DB connection fail******");
    // Exit process with failure OR maybe do mongooseloseConnectioin here
    process.exit(1);
  }
};

export default connectDB;
