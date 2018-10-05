import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextInput } from '@components/TextInput';
import { FullWidthButton } from '@components/FullWidthButton';
import { Logo } from './components/Logo';
import { RegisterLink } from './components/RegisterLink';

const Background: React.SFC<{}> = ({ children }) => (
  <LinearGradient
    style={{ flex: 1 }}
    end={{ x: 2, y: 1 }}
    start={{ x: 0, y: 1 }}
    colors={['#c68690', '#801ffa']}>
    {children}
  </LinearGradient>
);

const FormWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
`;

export class LoginScreen extends React.Component {
  public render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Background>
          <Logo />
          <FormWrapper>
            <TextInput
              placeholder="E-mail"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              placeholder="Password"
              textContentType="password"
              secureTextEntry={true}
            />
            <RegisterLink />
          </FormWrapper>
          <FullWidthButton background="white" color="#a759be">
            LET ME IN! 👉
          </FullWidthButton>
        </Background>
      </ScrollView>
    );
  }
}
