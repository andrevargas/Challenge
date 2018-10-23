import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AsyncStorage } from 'react-native';

const GRAPHQL_SERVER_URI = 'http://localhost:4000';

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER_URI,
});

const authLink = setContext(async () => {
  const token = await AsyncStorage.getItem('@@auth_token');
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
