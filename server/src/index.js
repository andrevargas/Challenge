import { ApolloServer } from 'apollo-server';
import { schema } from './modules/schema';
import { connectDatabase } from './database';
import { getUser } from './auth';

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization),
  }),
});

async function bootstrap() {
  try {
    await connectDatabase();
    const { url } = await server.listen();
    console.log(`🚀 Server ready at ${url}`);
  } catch (error) {
    console.error('🚫 Failed to start server');
    throw error;
  }
}

bootstrap();
