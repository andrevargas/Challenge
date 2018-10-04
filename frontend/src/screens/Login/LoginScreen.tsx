import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

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
`;

const LoginButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 20px;
  background-color: white;
  elevation: 10;
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
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  align-self: center;
`;

export class LoginScreen extends React.Component {
  public render() {
    return (
      <Background>
        <FormWrapper>
          <TitleWrapper>
            <Title>To</Title>
            <Title style={{ fontFamily: 'sans-serif' }}>Don't</Title>
          </TitleWrapper>
          <Image source={require('../../assets/no-good-emoji.png')} />
        </FormWrapper>
        <LoginButton>
          <ButtonText>LET ME IN!</ButtonText>
        </LoginButton>
      </Background>
    )
  }
}
