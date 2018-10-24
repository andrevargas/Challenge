import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import { ScrollContainer } from '@app/components/layout/ScrollContainer';
import { Title } from '@app/components/core/Title';
import { GradientButton } from '@app/components/core/GradientButton';
import { TextInput } from '@app/components/forms/TextInput';

import styled from 'styled-components/native';
import { white, tomato } from '@app/theme/colors';

export class AddTodoScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = ({
    navigation,
  }: NavigationInjectedProps) => ({
    // tslint:disable:jsx-no-lambda
    headerRight: (
      <CancelButton onPress={() => navigation.goBack()}>
        <CancelText>❌</CancelText>
      </CancelButton>
    ),
  });

  public render() {
    return (
      <ScrollContainer>
        <Wrapper>
          <Title>Create a todo</Title>
          <TextInput placeholder="Description" />
          <TextInput placeholder="Date" />
        </Wrapper>
        <GradientButton color={white.value}>I'LL DO IT LATER 🤞</GradientButton>
      </ScrollContainer>
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
