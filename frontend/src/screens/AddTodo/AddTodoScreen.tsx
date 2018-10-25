import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { Mutation, MutationFn } from 'react-apollo';
import AddTodoMutation from './mutation/AddTodo.graphql';
import TodoListQuery from '../TodoList/query/TodoList.graphql';

import { ScrollContainer } from '@app/components/layout/ScrollContainer';
import { GradientButton } from '@app/components/core/GradientButton';
import { Title } from '@app/components/core/Title';
import { TextInput } from '@app/components/forms/TextInput';
import { CancelButton } from './components/CancelButton';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';

interface IState {
  description?: string;
  date?: string;
}

interface IAddTodoData {
  todo: {
    date: string;
    description: string;
  };
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
          cache.writeQuery({
            query: TodoListQuery,
            data: todos.edges.concat([
              {
                node: todo,
              },
            ]),
          });
        }}>
        {commitMutation => (
          <ScrollContainer>
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
