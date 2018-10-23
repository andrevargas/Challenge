import * as React from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { ScrollContainer } from '@components/ScrollContainer';
import { Link } from '@components/Link';
import { RegisterForm } from './components/RegisterForm';

import { amethyst } from '@app/theme/colors';

export class RegisterScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <ScrollContainer>
        <RegisterForm onSubmit={this.signUp}>
          <Link color={amethyst.value} onPress={this.toLogin}>
            Already a professional procrastinator?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>
              Please sign in!
            </Text>{' '}
            <Text>👈</Text>
          </Link>
        </RegisterForm>
      </ScrollContainer>
    );
  }

  private toLogin = () => {
    this.props.navigation.navigate('Login');
  };

  private signUp = () => null;
}
