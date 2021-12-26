import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { importSchema } from "graphql-import";

const typeDefs = importSchema("./src/schema.graphql");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    credentials: true,
    origin: true,
  },
});

app.listen(process.env.PORT, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://localhost:4000/graphql
  `);
});
