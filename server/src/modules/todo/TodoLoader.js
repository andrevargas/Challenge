import { TodoModel } from './TodoModel';
import { prepare } from '../resolvers';

export async function loadAllTodos(root, { offset, limit }, { user }) {
  const todos = await TodoModel.find({ user })
    .skip(offset)
    .limit(limit);

  return todos.map(prepare);
}

export function loadTodo() {}
