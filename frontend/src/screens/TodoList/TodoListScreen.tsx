import * as React from 'react';
import { FlatList } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Query } from 'react-apollo';
import TodoListQuery from './query/TodoList.graphql';

import { Title } from '@app/components/core/Title';
import { TodoItem } from './components/TodoItem';
import { AddTodoButton } from './components/AddTodoButton';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';

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
              return null;
            }
            if (data) {
              return (
                <FlatList
                  data={data.todos.edges}
                  keyExtractor={(item: any) => item.node.id}
                  renderItem={({ item }: any) => (
                    <TodoItem>{item.node.description}</TodoItem>
                  )}
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
}

const Container = styled.View`
  flex: 1;
  background-color: ${white.value};
`;
