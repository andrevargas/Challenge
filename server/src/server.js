import { ApolloServer } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';

import { schema } from './modules/schema';
import { getUser } from './auth';

import './config';
import { connectDatabase } from './database';

const server = new ApolloServer({
  schema,
  context: async ({ event }) => ({
    user: await getUser(event.headers.authorization),
  }),
});

connectDatabase();

export const graphqlHandler = server.createHandler();
export const playgroundHandler = lambdaPlayground({
  endpoint: '/graphql',
});
