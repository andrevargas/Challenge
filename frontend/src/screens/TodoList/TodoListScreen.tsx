import * as React from 'react';
import { ScrollView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { ScrollContainer } from '@app/components/ScrollContainer';
import { Title } from '@app/components/Title';
import { TodoItem } from './components/TodoItem';
import { AddTodoButton } from './components/AddTodoButton';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';

export class TodoListScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <Container>
        <ScrollContainer>
          <Title style={{ padding: 20, paddingBottom: 0 }}>
            Things you won't do
          </Title>
          <TodoItem>Hey, how is it going?</TodoItem>
          <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
          <TodoItem>Hey, how is it going?</TodoItem>
          <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
          <TodoItem>Hey, how is it going?</TodoItem>
        </ScrollContainer>
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
