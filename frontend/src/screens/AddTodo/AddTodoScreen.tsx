import * as React from 'react';
import { ScrollView } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Title } from '@components/Title';
import { TodoInput } from './components/TodoInput';

import styled from 'styled-components/native';
import { white, tomato } from '@app/theme/colors';
import { RegisterButton } from '../Register/components/RegisterButton';

export class AddTodoScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = ({
    navigation,
  }: NavigationInjectedProps) => ({
    headerRight: (
      <CancelButton onPress={navigation.goBack}>
        <CancelText>CANCEL</CancelText>
      </CancelButton>
    ),
  });

  public render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Title>Create a todo</Title>
          <TodoInput placeholder="Description" />
          <TodoInput placeholder="Date" />
        </Wrapper>
        <RegisterButton color={white.value}>I'LL DO IT LATER 🤞</RegisterButton>
      </ScrollView>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${white.value};
`;

const CancelButton = styled.TouchableOpacity`
  padding: 5px 20px;
  margin-right: 10px;
  border-radius: 5px;
`;

const CancelText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${tomato.value};
`;
