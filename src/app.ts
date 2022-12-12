import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";

import typeDefs from "./schema/schema";
import resolvers from "./resolver/resolvers";

const PORT = 8080;

const app: Application = express();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();
app.listen({ port: PORT }, () =>
  console.log(`Server is ready on port ${PORT}`)
);
