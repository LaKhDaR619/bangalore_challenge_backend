import express from "express";
// import dotenv from "dotenv";
// dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => res.json("hello"));

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
