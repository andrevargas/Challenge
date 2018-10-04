import { ForbiddenError } from 'apollo-server';
import { GraphQLDateTime } from 'graphql-iso-date';
import { skip, pipe } from 'graphql-resolvers';

import * as UserType from './user/UserType';
import * as TodoType from './todo/TodoType';

export function prepare(instance) {
  instance.id = instance._id.toString();
  return instance;
}

export function authResolver(root, args, { user }) {
  if (user) {
    return skip;
  } else {
    throw new ForbiddenError('User not authenticated.');
  }
}

export function withAuth(resolver) {
  return pipe(
    authResolver,
    resolver
  );
}

export const resolvers = {
  Query: {
    ...UserType.queryResolvers,
    ...TodoType.queryResolvers,
  },
  Mutation: {
    ...UserType.mutationResolvers,
    ...TodoType.mutationResolvers,
  },
  DateTime: GraphQLDateTime,
  PageInfo: {
    hasNextPage: connection => connection.hasNextPage(),
    hasPreviousPage: connection => connection.hasPreviousPage(),
  },
};
