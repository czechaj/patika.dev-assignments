const express = require("express");
const ejs = require("ejs");
const pageRouter = require("./routes/pageRouter");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

require("dotenv").config();

const app = express();

Mongoose.connect(`mongodb://localhost:27017/freelancer-db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("database connected");
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.use("/", pageRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`server is working on port ${port}`);
});
