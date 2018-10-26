import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Buffer } from 'buffer';
import { Mutation, MutationFn } from 'react-apollo';
import AddTodoMutation from './mutation/AddTodo.graphql';
import TodoListQuery from '../TodoList/query/TodoList.graphql';
import { ITodoNode } from '@app/interfaces/ITodoNode';

import { ScrollContainer } from '@components/layout/ScrollContainer';
import { GradientButton } from '@components/core/GradientButton';
import { Title } from '@components/core/Title';
import { TextInput } from '@components/forms/TextInput';
import { CancelButton } from './components/CancelButton';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';
import { LoadingOverlay } from '@app/components/core';

interface IState {
  description?: string;
  date?: string;
}

interface IAddTodoData {
  todo: ITodoNode;
}

export class AddTodoScreen extends React.Component<
  NavigationInjectedProps,
  IState
> {
  public static navigationOptions = ({
    navigation,
  }: NavigationInjectedProps) => ({
    // tslint:disable:jsx-no-lambda
    headerRight: (
      <CancelButton onPress={() => navigation.goBack()}>❌</CancelButton>
    ),
  });

  public state: IState = {
    description: '',
    date: '',
  };

  public render() {
    return (
      <Mutation
        mutation={AddTodoMutation}
        update={(cache, { data: { todo } }) => {
          const { todos } = cache.readQuery({ query: TodoListQuery }) as any;
          const edge = {
            cursor: Buffer.from(todo.createdAt).toString('base64'),
            node: todo,
            __typename: 'TodoEdge',
          };
          cache.writeQuery({
            query: TodoListQuery,
            data: {
              todos: {
                ...todos,
                edges: [edge, ...todos.edges],
              },
            },
          });
        }}>
        {(commitMutation, { loading }) => (
          <ScrollContainer>
            <LoadingOverlay loading={loading} />
            <Wrapper>
              <Title>Create a todo</Title>
              <TextInput
                value={this.state.description}
                onChangeText={this.handleFieldChange('description')}
                placeholder="Description"
              />
              <TextInput
                value={this.state.date}
                onChangeText={this.handleFieldChange('date')}
                placeholder="Date"
              />
            </Wrapper>
            <GradientButton
              color={white.value}
              onPress={this.addTodo(commitMutation)}>
              I'LL DO IT LATER 🤞
            </GradientButton>
          </ScrollContainer>
        )}
      </Mutation>
    );
  }

  private handleFieldChange = (field: keyof IState) => (text: string) => {
    this.setState({ [field]: text });
  };

  private addTodo = (commitMutation: MutationFn<IAddTodoData>) => async () => {
    const result = await commitMutation({
      variables: { input: this.state },
    });

    if (result && result.data) {
      this.props.navigation.goBack();
    }
  };
}

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${white.value};
`;
