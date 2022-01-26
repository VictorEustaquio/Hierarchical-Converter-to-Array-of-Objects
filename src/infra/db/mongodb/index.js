const env = require("../../../../dotenv.js");
const mongoose = require("mongoose");
const { schema_file_system } = require("./schemas");

const mongoDbConnectionString = `mongodb://${env.MONGO_ADMIN}:${env.MONGO_PASSWORD}@${env.MONGO_CONTAINER_HOST}:${env.MONGO_CONTAINER_PORT}/${env.MONGO_DATABASE}?authSource=admin&readPreference=primary&appname=Backend%20Express&directConnection=true&ssl=false`;
const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
  //useFindAndModify: false,
};
const readyStateDict = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

try {
  mongoose.connect(mongoDbConnectionString, mongoConfig, function (err, conn) {
    if (conn)
      console.log(
        "Mongo",
        readyStateDict[mongoose.connection.readyState],
        "✔️"
      );
    if (err)
      console.log(
        `Mongo ${
          readyStateDict[mongoose.connection.readyState]
        } ❌\n|__details: ${err.message}`
      );
  });
} catch (error) {
  console.log(error.message);
}

module.export = mongoose;
