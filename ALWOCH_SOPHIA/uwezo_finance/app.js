require("dotenv").config();
const express = require("express");

const connectDB = require("./db/connect");
const path = require("path");
const reqRoutes = require("./routes/loan");

//express app
const app = express();
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", reqRoutes);

//view engine
app.engine("pug", require("pug").__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//port variable
const port = process.env.PORT || 3000;

//listening for requests
const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(port, console.log(`listening for requests on ${port}`));
};
start();
