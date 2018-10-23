import * as React from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { MutationFn } from 'react-apollo';

import { SignInMutation } from './mutation/SignInMutation';

import { ScrollContainer } from '@components/ScrollContainer';
import { GradientBackground } from '@components/GradientBackground';
import { Link } from '@components/Link';
import { Logo } from './components/Logo';
import { LoginForm } from './components/LoginForm';

import { white, rose, violet } from '@app/theme/colors';

export class LoginScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <ScrollContainer>
        <GradientBackground to={violet.value} from={rose.value}>
          <SignInMutation>
            {commitMutation => (
              <LoginForm
                onSubmit={this.signIn(commitMutation)}
                renderBefore={<Logo />}
                renderAfter={
                  <Link
                    color={white.alpha(0.8).value}
                    onPress={this.toRegister}>
                    Ready to procrastinate?{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>
                      Create an account!
                    </Text>{' '}
                    <Text>👉</Text>
                  </Link>
                }
              />
            )}
          </SignInMutation>
        </GradientBackground>
      </ScrollContainer>
    );
  }

  private toRegister = () => {
    this.props.navigation.navigate('Register');
  };

  private signIn = (commitMutation: MutationFn) => async (variables: any) => {
    await commitMutation({ variables });
    this.props.navigation.navigate('TodoList');
  };
}
