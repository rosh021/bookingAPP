import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    const connStr = process.env.MONGO_URL;

    const connect = mongoose.connect(connStr);

    connect && console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};
