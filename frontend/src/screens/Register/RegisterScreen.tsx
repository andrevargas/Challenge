import * as React from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import styled from 'styled-components/native';

import { TextInput } from '@components/TextInput';
import { Link } from '@components/Link';
import { RegisterButton } from './components/RegisterButton';
import { hsla } from '@app/styles';

const black = hsla(0, 0, 50, 0.3);

export class RegisterScreen extends React.Component<NavigationInjectedProps> {
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
            selectionColor="#a759be"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="Name"
            textContentType="name"
          />
          <TextInput
            color="#333333"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            color="#333333"
            borderColor={black.value}
            borderFocusedColor="#a759be"
            placeholderTextColor={black.alpha(0.5).value}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
          <Link color="#a759be" onPress={this.toLogin}>
            Already a professional procrastinator?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Please sign in!
            </Text>{' '}
            <Text>👈</Text>
          </Link>
        </Wrapper>
        <RegisterButton color="white">CREATE MY ACCOUNT ⚡</RegisterButton>
      </Background>
    );
  }

  private toLogin = () => {
    this.props.navigation.navigate('Login');
  };
}

const Title = styled.Text`
  color: #a759be;
  font-size: 32px;
  font-family: 'sans-serif-medium';
  margin-bottom: 5%;
`;

const Info = styled.Text`
  color: #333333;
  font-size: 18px;
  margin-bottom: 5%;
`;

const Background = styled.ScrollView`
  flex: 1;
  background: white;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
`;
