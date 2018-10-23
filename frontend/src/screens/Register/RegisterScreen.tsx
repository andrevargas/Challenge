import * as React from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { ScrollContainer } from '@components/ScrollContainer';
import { Title } from '@components/Title';
import { Link } from '@components/Link';
import { TextInput } from '@components/TextInput';
import { GradientButton } from '@components/GradientButton';

import styled from 'styled-components/native';
import { amethyst, darkGrey, white } from '@app/theme/colors';

export class RegisterScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    header: null,
  };

  public render() {
    return (
      <ScrollContainer contentContainerStyle={{ flexGrow: 1 }}>
        <Wrapper>
          <Title>Create your account</Title>
          <Info>
            You're almost there! We just need your data, but relax, we promise
            we won't sell it.
          </Info>
          <TextInput placeholder="Name" textContentType="name" />
          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
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
        <GradientButton color={white.value}>
          CREATE MY ACCOUNT ⚡
        </GradientButton>
      </ScrollContainer>
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
