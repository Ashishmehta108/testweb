import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => console.log("server running"));

app.get("/", (req, res) => {
  res.send("hello world");
});
