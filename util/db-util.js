import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.mongodb_username);
  const db = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mejpo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not connect to database.", msg: err.message });
    console.log(err, "******DB connection fail******");
    // Exit process with failure OR maybe do mongooseloseConnectioin here
    process.exit(1);
  }
};

export default connectDB;
