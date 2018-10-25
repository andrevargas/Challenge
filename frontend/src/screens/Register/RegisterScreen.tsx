import * as React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { Mutation, MutationFn } from 'react-apollo';
import SignUpMutation from './mutation/SignUp.graphql';

import { ScrollContainer } from '@components/layout';
import { Link, Title, GradientButton, LoadingOverlay } from '@components/core';
import { TextInput } from '@app/components/forms';

import styled from 'styled-components/native';
import { amethyst, white, darkGrey } from '@app/theme/colors';

interface IState {
  name?: string;
  email?: string;
  password?: string;
}

interface ISignUpData {
  user: { token: string };
}

export class RegisterScreen extends React.Component<
  NavigationInjectedProps,
  IState
> {
  public state: IState = {
    name: '',
    email: '',
    password: '',
  };

  public render() {
    return (
      <Mutation mutation={SignUpMutation}>
        {(commitMutation, { loading }) => (
          <ScrollContainer>
            <LoadingOverlay loading={loading} />
            <FormWrapper>
              <Title>Create your account</Title>
              <Info>
                You're almost there! We just need your data, but relax, we
                promise we won't sell it.
              </Info>
              <TextInput
                value={this.state.name}
                onChangeText={this.handleFieldChange('name')}
                placeholder="Name"
                textContentType="name"
              />
              <TextInput
                value={this.state.email}
                onChangeText={this.handleFieldChange('email')}
                placeholder="E-mail"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <TextInput
                value={this.state.password}
                onChangeText={this.handleFieldChange('password')}
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
            </FormWrapper>
            <GradientButton
              color={white.value}
              onPress={this.signUp(commitMutation) as any}>
              CREATE MY ACCOUNT ⚡
            </GradientButton>
          </ScrollContainer>
        )}
      </Mutation>
    );
  }

  private handleFieldChange = (field: keyof IState) => (text: string) => {
    this.setState({ [field]: text });
  };

  private signUp = (commitMutation: MutationFn<ISignUpData>) => async () => {
    const result = await commitMutation({
      variables: { input: this.state },
    });

    if (result && result.data) {
      const { user } = result.data;
      await AsyncStorage.setItem('@@auth_token', user.token);
      this.props.navigation.navigate('App');
    }
  };

  private toLogin = () => {
    this.props.navigation.navigate('Login');
  };
}

const Info = styled.Text`
  color: ${darkGrey.value};
  font-size: 18px;
  margin-bottom: 5%;
`;

const FormWrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${white.value};
`;
