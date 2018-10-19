import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';
import { white, rose, violet } from '@app/theme/colors';
import { TouchableOpacityProps } from 'react-native';

export const AddTodoButton: React.SFC<TouchableOpacityProps> = props => (
  <Touchable onPress={props.onPress}>
    <Gradient
      end={{ x: 2, y: 1 }}
      start={{ x: 0, y: 1 }}
      colors={[rose.value, violet.value]}>
      <Title>➕ &nbsp;ADD NEW TODO</Title>
    </Gradient>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  bottom: 20px;
`;

const Gradient = styled(LinearGradient)`
  padding: 20px 30px;
  border-radius: 50px;
  elevation: 5;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${white.value};
`;
