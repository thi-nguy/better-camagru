import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";
import mongoose from "mongoose";

const expressLayouts = require("express-ejs-layouts"); // do not import here since the package won't go along with others

import typeDefs from "./schema/schema";
import resolvers from "./resolver/resolvers";

// Load data api
import { mongoDataMethods } from "./data/api";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://meomeo:Meomeo2022@camagru.ndvcixa.mongodb.net/camagruDB?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const PORT = 8080;

const app: Application = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }), // xong lay ra tu resolver la context (parent, args, context...)
  });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();
app.listen({ port: PORT }, () =>
  console.log(`Server is ready on port ${PORT}`)
);
