const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: "http://localhost:8081", //change me
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

//models
const db = require("./app/models");
db.sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dish database !" });
});
require("./app/routes/users.route")(app);
require("./app/routes/recipe.route")(app);
require("./app/routes/steps.route")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
