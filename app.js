import express from "express";
import createHomepageTemplate from "./views/index.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (_, res) => {
  res.send(createHomepageTemplate());
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Started on PORT ${PORT}`);
});
