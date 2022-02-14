const mongoose = require("mongoose");
require("dotenv/config")

const MONGO_URI = process.env.MONGODB_URI || `mongodb+srv://${process.env.MG_USER}:${process.env.MG_PWD}@cluster0.sexab.mongodb.net/RegistrationExercise?retryWrites=true&w=majority` ;

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
