import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/health", (req, res) => {
  res.send("Server is healthy!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
