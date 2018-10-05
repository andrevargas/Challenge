import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Logo: React.SFC<{}> = () => (
  <Wrapper>
    <Title>
      To
      <Text style={{ color: 'yellow' }}>Don't</Text>
    </Title>
    <Emoji source={require('@assets/no-good-emoji.png')} />
  </Wrapper>
);

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;
  height: 100px;
`;

const Emoji = styled.Image`
  width: 70px;
  height: 70px;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 72px;
  color: whitesmoke;
  text-shadow: 0px 0px 10px hsla(0, 0%, 0%, 0.1);
  text-align: center;
  font-family: 'sans-serif-thin';
`;
