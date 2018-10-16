import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Title } from '@app/components/Title';
import { TodoItem } from './components/TodoItem';
import { BottomBar } from './components/BottomBar';

import styled from 'styled-components/native';
import { white } from '@app/theme/colors';

export class TodoListScreen extends React.Component<NavigationInjectedProps> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, zIndex: 1 }}>
          <Wrapper>
            <Title style={{ padding: 20, paddingBottom: 0 }}>
              Things you won't do
            </Title>
            <TodoItem>Hey, how is it going?</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Hey, how is it going?</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Hey, how is it going?</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
            <TodoItem>Lorem ipsum dolor sit amet lorem ipsis iteris</TodoItem>
          </Wrapper>
        </ScrollView>
        <BottomBar />
      </View>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${white.value};
`;
