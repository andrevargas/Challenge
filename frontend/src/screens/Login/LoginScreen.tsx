import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { TextInput } from '@components/TextInput';
import { Link } from '@components/Link';
import { LoginButton } from './components/LoginButton';
import { Logo } from './components/Logo';

import styled from 'styled-components/native';
import { white, rose, violet } from '@app/theme/colors';

export class LoginScreen extends React.Component<NavigationInjectedProps> {
  public render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          style={{ flex: 1 }}
          end={{ x: 2, y: 1 }}
          start={{ x: 0, y: 1 }}
          colors={[rose.value, violet.value]}>
          <FormWrapper>
            <Logo />
            <TextInput
              placeholder="E-mail"
              textContentType="emailAddress"
              keyboardType="email-address"
              borderColor={white.alpha(0.5).value}
              borderFocusedColor="yellow"
            />
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
              color={white.value}
              borderColor={white.alpha(0.5).value}
              borderFocusedColor="yellow"
            />
            <Link color={white.alpha(0.8).value} onPress={this.toRegister}>
              Ready to procrastinate?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                Create an account!
              </Text>{' '}
              <Text>👉</Text>
            </Link>
          </FormWrapper>
          <LoginButton background="white" color="#a759be">
            LET ME IN! 👉
          </LoginButton>
        </LinearGradient>
      </ScrollView>
    );
  }
  private toRegister = () => {
    this.props.navigation.navigate('Register');
  };
}

const FormWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
`;
