import * as React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextInput } from '../../components/TextInput';

const Background = ({ children }: any) => (
  <LinearGradient
    style={{ flex: 1 }}
    end={{ x: 2, y: 1 }}
    start={{ x: 0, y: 1 }}
    colors={['#c68690', '#801ffa']}>
    {children}
  </LinearGradient>
);

const Title = styled.Text`
  font-size: 72px;
  color: whitesmoke;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'sans-serif-thin';
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10%;
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 20px;
  background-color: white;
  elevation: 10;
`;

const RegisterButton = styled.TouchableOpacity`
  width: 100%;
`;

const RegisterButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

const ButtonText = styled.Text`
  color: #a759be;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const FormWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-horizontal: 20px;
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  align-self: center;
  margin-bottom: 50px;
`;

export class LoginScreen extends React.Component {
  public render() {
    return (
      <Background>
        <FormWrapper>
          <TitleWrapper>
            <Title>To</Title>
            <Title style={{ color: 'yellow' }}>Don't</Title>
          </TitleWrapper>
          <Image source={require('../../assets/no-good-emoji.png')} />
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
          <RegisterButton>
            <RegisterButtonText>
              Ready to procrastinate?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                Create an account!
              </Text>{' '}
              <Text>👉</Text>
            </RegisterButtonText>
          </RegisterButton>
        </FormWrapper>
        <LoginButton>
          <ButtonText>LET ME IN! 👉</ButtonText>
        </LoginButton>
      </Background>
    );
  }
}
