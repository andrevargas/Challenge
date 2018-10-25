import * as TodoLoader from './TodoLoader';
import * as TodoMutation from './TodoMutation';

import { withAuth } from '../resolvers';

export const typeDefs = `
  type Todo {
    id: ID!
    completed: Boolean
    description: String!
    date: DateTime
    createdAt: DateTime
    updatedAt: DateTime
    user: User
  }

  type TodoConnection {
    edges: [TodoEdge]
    pageInfo: PageInfo!
  }

  type TodoEdge {
    cursor: String!
    node: Todo!
  }

  input AddTodoInput {
    description: String!
    date: String
  }
`;

export const queryResolvers = {
  todo: withAuth(TodoLoader.loadTodo),
  todos: withAuth(TodoLoader.loadAllTodos),
};

export const mutationResolvers = {
  addTodo: withAuth(TodoMutation.addTodo),
};
