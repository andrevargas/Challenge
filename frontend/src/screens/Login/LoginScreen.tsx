import * as React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Mutation, MutationFn } from 'react-apollo';
import SignInMutation from './mutation/SignIn.graphql';

import { GradientBackground, ScrollContainer } from '@components/layout';
import { TextInput } from '@components/forms';
import { Button, Link, Logo } from '@components/core';

import styled from 'styled-components/native';
import { white, rose, violet, yellow, amethyst } from '@app/theme/colors';

interface IState {
  email?: string;
  password?: string;
}

interface ISignInData {
  user: { token: string };
}

export class LoginScreen extends React.Component<
  NavigationInjectedProps,
  IState
> {
  public state: IState = {
    email: '',
    password: '',
  };

  public render() {
    return (
      <ScrollContainer>
        <GradientBackground to={violet.value} from={rose.value}>
          <Mutation mutation={SignInMutation}>
            {commitMutation => (
              <View style={{ flex: 1 }}>
                <FormWrapper>
                  <Logo />
                  <TextInput
                    value={this.state.email}
                    onChangeText={this.handleFieldChange('email')}
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    color={white.value}
                    placeholderTextColor={white.alpha(0.6).value}
                    borderColor={white.alpha(0.5).value}
                    borderFocusedColor={yellow.value}
                  />
                  <TextInput
                    value={this.state.password}
                    onChangeText={this.handleFieldChange('password')}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    color={white.value}
                    placeholderTextColor={white.alpha(0.6).value}
                    borderColor={white.alpha(0.5).value}
                    borderFocusedColor={yellow.value}
                  />
                  <Link
                    color={white.alpha(0.8).value}
                    onPress={this.toRegister}>
                    Ready to procrastinate?{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>
                      Create an account!
                    </Text>{' '}
                    <Text>👉</Text>
                  </Link>
                </FormWrapper>
                <Button
                  onPress={this.signIn(commitMutation) as any}
                  color={amethyst.value}
                  backgroundColor={white.value}>
                  LET ME IN! 👉
                </Button>
              </View>
            )}
          </Mutation>
        </GradientBackground>
      </ScrollContainer>
    );
  }

  private handleFieldChange = (field: keyof IState) => (text: string) => {
    this.setState({ [field]: text });
  };

  private signIn = (commitMutation: MutationFn<ISignInData>) => async () => {
    const result = await commitMutation({
      variables: { input: this.state },
    });

    if (result && result.data) {
      const { user } = result.data;
      await AsyncStorage.setItem('@@auth_token', user.token);
      this.props.navigation.navigate('App');
    }
  };

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
