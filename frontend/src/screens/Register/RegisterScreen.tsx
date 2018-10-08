import * as React from 'react';
import styled from 'styled-components/native';
import { TextInput } from '@components/TextInput';
import { RegisterButton } from './components/RegisterButton';
import { hsla } from '@app/styles';

const Title = styled.Text`
  color: #a759be;
  font-size: 36px;
  font-family: 'sans-serif-medium';
  margin-bottom: 5%;
`;

const Info = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 10%;
`;

const Background = styled.ScrollView`
  flex: 1;
  background: white;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
`;

const black = hsla(0, 0, 50, 0.3);

export class RegisterScreen extends React.Component {
  public render() {
    return (
      <Background contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Title>Create your account</Title>
          <Info>
            You're almost there! We just need your data, but relax, we promise
            we won't sell it.
          </Info>
          <TextInput
            color="#333333"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="Name"
          />
          <TextInput
            color="#333333"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="E-mail"
          />
          <TextInput
            color="#333333"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="Password"
          />
        </Wrapper>
        <RegisterButton color="white">CREATE MY ACCOUNT 👉</RegisterButton>
      </Background>
    );
  }
}
