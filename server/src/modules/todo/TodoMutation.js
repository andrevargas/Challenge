import { TodoModel } from './TodoModel';
import { prepare } from '../resolvers';

export async function addTodo(
  root,
  { input: { description, date } },
  { user }
) {
  const todo = await TodoModel.create({
    user,
    date,
    description,
  });

  return prepare(todo);
}

export function removeTodo() {}

export function completeTodo() {}
