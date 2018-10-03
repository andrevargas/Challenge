import { TodoModel } from './TodoModel';
import { encode, decode } from 'base-64';
import { prepare } from '../resolvers';

export async function loadAllTodos(
  root,
  { first, last, before, after },
  { user }
) {
  const $where = {};
  const $options = {
    limit: 10,
    sort: { createdAt: 'desc' },
  };

  if (before) {
    $where.createdAt = { $lt: new Date(decode(before)) };
  }

  if (after) {
    $where.createdAt = { $gt: new Date(decode(after)) };
  }

  const todos = await TodoModel.find($where, null, $options);
  const edges = todos.map(todo => ({
    node: prepare(todo),
    cursor: encode(todo.createdAt.toISOString()),
  }));

  const pageInfo = {
    async hasNextPage() {
      if (todos.length < (last || first)) {
        return false;
      }

      const operator = before ? '$gt' : '$lt';
      const lastTodo = todos[todos.length - 1];
      const nextTodo = await TodoModel.findOne(
        {
          user,
          createdAt: {
            [operator]: new Date(lastTodo.createdAt),
          },
        },
        null,
        {
          sort: { createdAt: 'desc' },
        }
      );

      return !!nextTodo;
    },
    async hasPreviousPage() {
      const previousTodo = await TodoModel.findOne($where, null, {
        sort: { createdAt: 'asc' },
      });

      return !!previousTodo;
    },
  };

  return {
    edges,
    pageInfo,
  };
}

export function loadTodo() {}
