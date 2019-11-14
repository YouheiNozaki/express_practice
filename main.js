"use strict";

const homeController = require("./controllers/homeController");

const port = 3000,
  express = require("express"),
  app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/", homeController.logRequestPaths);

app.get("/items/:vegetable", homeController.sendReqParams);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
