import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/dbConfig.js";

const PORT = process.env.PORT || 8000;

const app = express();

// connecting to database
connectDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "Hello From the Server",
  });
});

app.use((error, req, res, next) => {
  const status = error.status || 404;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running in http://localhost:${PORT}`);
});
