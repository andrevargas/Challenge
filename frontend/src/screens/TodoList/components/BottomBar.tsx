import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';
import { white, rose, violet } from '@app/theme/colors';
import { TouchableOpacity, Text } from 'react-native';

export const BottomBar = () => (
  <TouchableOpacity>
    <Gradient
      end={{ x: 2, y: 1 }}
      start={{ x: 0, y: 1 }}
      colors={[rose.value, violet.value]}>
      <Title>➕ &nbsp;ADD NEW TODO</Title>
    </Gradient>
  </TouchableOpacity>
);

const Gradient = styled(LinearGradient)`
  padding: 20px 30px;
  border-radius: 50px;
  align-self: center;
  position: relative;
  bottom: 20px;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${white.value};
`;
