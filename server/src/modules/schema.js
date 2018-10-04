import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

import * as UserType from './user/UserType';
import * as TodoType from './todo/TodoType';

export const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    me: User
    todo(id: ID!): Todo
    todos(first: Int, after: String, last: Int, before: String): TodoConnection
  }

  type Mutation {
    signIn(input: SignInInput!): User!
    signUp(input: SignUpInput!): User!

    addTodo(input: AddTodoInput): Todo!
    removeTodo(input: RemoveTodoInput): Todo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }
`;

export const typeDefs = [UserType.typeDefs, TodoType.typeDefs];

export const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers: {
    ...resolvers,
    PageInfo: {
      hasNextPage: connection => connection.hasNextPage(),
      hasPreviousPage: connection => connection.hasPreviousPage(),
    },
  },
});
