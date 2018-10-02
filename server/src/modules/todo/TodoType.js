import * as TodoLoader from './TodoLoader';
import * as TodoMutation from './TodoMutation';

export const typeDefs = `
  type Todo {
    id: ID!
    description: String!
    completed: Boolean!
    date: String
    user: User!
  }

  type AddTodoInput {
    description: String!
    date: String
  }

  type RemoveTodoInput {
    id: ID!
  }

  type CompleteTodoInput {
    id: ID!
    completed: Boolean!
  }
`;

export const queryResolvers = {
  todo: TodoLoader.loadTodo,
  todos: TodoLoader.loadAllTodos,
};

export const mutationResolvers = {
  addTodo: TodoMutation.addTodo,
  removeTodo: TodoMutation.removeTodo,
  completeTodo: TodoMutation.completeTodo,
};
