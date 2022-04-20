const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const pageRouter = require("./routers/pageRouter");
const userRouter = require("./routers/userRouter");
const trainingRouter = require("./routers/TrainingRouter");

const app = express();

/* connect db */
mongoose
  .connect("mongodb://localhost:27017/misfit-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  });

/* template engine */
app.set("view engine", "ejs");

/* global variables */
global.userIn = null;

/* MIDDLEWARES */
app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(flash()); // flash messages(requires session)
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

app.use(
  // session
  session({
    secret: "Klsoam",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/misfit-db",
    }),
  })
);

app.use(methodOverride("X-HTTP-Method-Override")); // put and delete methods
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

/* routes */
app.use("*", (req, res, next) => {
  userIn = req.session.userId;
  next();
});
app.use("/", pageRouter);
app.use("/users", userRouter);
app.use("/trainings", trainingRouter);



/* setup */
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server port ${3000}de baslatildi`);
});
