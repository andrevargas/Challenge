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
    todos(offset: Int, limit: Int): [Todo]
  }

  type Mutation {
    signIn(input: SignInInput!): User!
    signUp(input: SignUpInput!): User!

    addTodo(input: AddTodoInput): Todo!
    removeTodo(input: RemoveTodoInput): Todo!
    completeTodo(input: CompleteTodoInput): Todo!
  }
`;

export const typeDefs = [UserType.typeDefs, TodoType.typeDefs];

export const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers,
});