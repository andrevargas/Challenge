import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Title } from '@components/Title';
import { Link } from '@components/Link';
import { RegisterInput } from './components/RegisterInput';
import { RegisterButton } from './components/RegisterButton';

import styled from 'styled-components/native';
import { amethyst, darkGrey, white } from '@app/theme/colors';

export class RegisterScreen extends React.Component<NavigationInjectedProps> {
  public render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Title>Create your account</Title>
          <Info>
            You're almost there! We just need your data, but relax, we promise
            we won't sell it.
          </Info>
          <RegisterInput placeholder="Name" textContentType="name" />
          <RegisterInput
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <RegisterInput
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
          <Link color={amethyst.value} onPress={this.toLogin}>
            Already a professional procrastinator?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Please sign in!
            </Text>{' '}
            <Text>👈</Text>
          </Link>
        </Wrapper>
        <RegisterButton color={white.value}>
          CREATE MY ACCOUNT ⚡
        </RegisterButton>
      </ScrollView>
    );
  }

  private toLogin = () => {
    this.props.navigation.navigate('Login');
  };
}

const Info = styled.Text`
  color: ${darkGrey.value};
  font-size: 18px;
  margin-bottom: 5%;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${white.value};
`;
