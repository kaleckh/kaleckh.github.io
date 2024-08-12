require("dotenv").config();
const express = require("express");
const massive = require("massive");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
const { PORT = 3001 } = process.env;
const cors = require("cors");
app.use(cors());
app.use(bodyParser());
const dotenv = require("dotenv");
require("dotenv").config();
require("postinstall");
const CONNECTION_STRING =
  "https://api.render.com/deploy/srv-cf7g7up4rebdrnnmq6jg?key=EDWYBgg-tww";

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
