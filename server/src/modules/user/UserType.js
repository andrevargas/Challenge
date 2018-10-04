import * as UserLoader from './UserLoader';
import * as UserMutation from './UserMutation';

import { withAuth } from '../resolvers';

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    token: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }
`;

export const queryResolvers = {
  me: withAuth(UserLoader.loadCurrentUser),
};

export const mutationResolvers = {
  signIn: UserMutation.signIn,
  signUp: UserMutation.signUp,
};
