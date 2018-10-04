import { TodoModel } from './TodoModel';
import { encode, decode } from 'base-64';
import { prepare } from '../resolvers';

export async function loadTodo(root, { id }, { user }) {
  const todo = await TodoModel.findOne({ _id: id, user });
  return todo;
}

export async function loadAllTodos(
  root,
  { first, last, before, after },
  { user }
) {
  const $where = {};
  const $options = {
    limit: first || last,
    sort: { createdAt: -1 },
  };

  if (before) {
    $where.createdAt = { $gte: new Date(decode(before)) };
  }

  if (after) {
    $where.createdAt = { $lte: new Date(decode(after)) };
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

      const $options = { sort: { createdAt: -1 } };
      const $where = {
        user,
        createdAt: {
          [operator]: new Date(lastTodo.createdAt),
        },
      };

      const nextTodo = await TodoModel.findOne($where, null, $options);
      return !!nextTodo;
    },
    async hasPreviousPage() {
      const $where = { user };
      const $options = { sort: { createdAt: 1 } };

      if (before) {
        $where.createdAt = { $gt: new Date(decode(before)) };
      }

      if (after) {
        $where.createdAt = { $lt: new Date(decode(after)) };
      }

      const previousTodo = await TodoModel.findOne($where, null, $options);
      return !!previousTodo;
    },
  };

  return {
    edges,
    pageInfo,
  };
}
