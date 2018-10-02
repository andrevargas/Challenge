import * as UserType from './user/UserType';
import * as TodoType from './todo/TodoType';

export const prepare = instance => {
  instance.id = instance._id.toString();
  return instance;
};

export const resolvers = {
  Query: {
    ...UserType.queryResolvers,
    ...TodoType.queryResolvers,
  },
  Mutation: {
    ...UserType.mutationResolvers,
    ...TodoType.mutationResolvers,
  },
};
