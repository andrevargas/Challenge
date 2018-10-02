import * as UserLoader from './UserLoader';
import * as UserMutation from './UserMutation';

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    token: String
  }

  type SignInInput {
    email: String!
    password: String!
  }

  type SignUpInput {
    name: String!
    email: String!
    password: String!
  }
`;

export const queryResolvers = {
  me: UserLoader.loadCurrentUser,
};

export const mutationResolvers = {
  signIn: UserMutation.signIn,
  signUp: UserMutation.signUp,
};
