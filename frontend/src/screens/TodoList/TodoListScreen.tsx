import * as React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Query } from 'react-apollo';
import TodoListQuery from './query/TodoList.graphql';
import { ITodoEdge } from '@app/interfaces/ITodoEdge';
import { ITodoNode } from '@app/interfaces/ITodoNode';

import { Title } from '@app/components/core/Title';
import { TodoItem } from './components/TodoItem';
import { AddTodoButton } from './components/AddTodoButton';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';
import { LoadingOverlay } from '@app/components/core';

export class TodoListScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    // tslint:disable:jsx-no-lambda
    return (
      <Container>
        <Title style={{ padding: 20, paddingBottom: 0 }}>
          Things you won't do
        </Title>
        <Query query={TodoListQuery} variables={{ count: 10 }}>
          {({ data, loading, fetchMore }) => {
            if (loading) {
              return <LoadingOverlay loading={true} />;
            }

            if (data && data.todos) {
              return (
                <FlatList<ITodoEdge>
                  data={data.todos.edges}
                  keyExtractor={item => item.node.id}
                  ListFooterComponent={Spacer}
                  renderItem={({ item }) => (
                    <TodoItem onPress={this.toDetail(item.node)}>
                      {item.node.description}
                    </TodoItem>
                  )}
                  onEndReachedThreshold={0.1}
                  onEndReached={() => {
                    if (!data.todos.pageInfo.hasNextPage) {
                      return;
                    }

                    const { cursor } = data.todos.edges[
                      data.todos.edges.length - 1
                    ];

                    fetchMore({
                      variables: { count: 10, cursor },
                      updateQuery: (previousResult, { fetchMoreResult }) => ({
                        todos: {
                          ...fetchMoreResult.todos,
                          edges: [
                            ...previousResult.todos.edges,
                            ...fetchMoreResult.todos.edges,
                          ],
                        },
                      }),
                    });
                  }}
                />
              );
            }
          }}
        </Query>
        <AddTodoButton onPress={this.toAddTodo} />
      </Container>
    );
  }

  private toAddTodo = () => {
    this.props.navigation.navigate('AddTodo');
  };

  private toDetail = (item: ITodoNode) => () => {
    this.props.navigation.navigate('TodoDetail', { item });
  };
}

const Container = styled.View`
  flex: 1;
  background-color: ${white.value};
`;

const Spacer = styled.View`
  width: 100%;
  height: 80px;
`;
