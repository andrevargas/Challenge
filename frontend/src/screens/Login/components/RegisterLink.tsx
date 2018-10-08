import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const RegisterLink: React.SFC<{}> = () => (
  <Touchable>
    <LinkText>
      Ready to procrastinate?{' '}
      <Text style={{ textDecorationLine: 'underline' }}>
        Create an account!
      </Text>{' '}
      <Text>👉</Text>
    </LinkText>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 5%;
`;

const LinkText = styled.Text`
  color: white;
  font-size: 20px;
`;
