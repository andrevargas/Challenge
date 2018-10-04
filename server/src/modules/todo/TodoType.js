import * as TodoLoader from './TodoLoader';
import * as TodoMutation from './TodoMutation';

export const typeDefs = `
  type Todo {
    id: ID!
    description: String!
    completed: Boolean!
    date: String!
    user: User!
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

  input RemoveTodoInput {
    id: ID!
  }
`;

export const queryResolvers = {
  todo: TodoLoader.loadTodo,
  todos: TodoLoader.loadAllTodos,
};

export const mutationResolvers = {
  addTodo: TodoMutation.addTodo,
  removeTodo: TodoMutation.removeTodo,
};
