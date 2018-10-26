import { ITodoEdge } from './ITodoEdge';
import { IPageInfo } from './IPageInfo';

export interface ITodoConnection {
  todos: {
    edges?: ITodoEdge[];
    pageInfo?: IPageInfo;
  };
}
