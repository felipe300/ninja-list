import express from "express";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (_, res) => {
  return res.json({
    message: "hello",
  });
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Started on PORT ${PORT}`);
});
