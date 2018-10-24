import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { GradientBackground } from '@components/layout';

import styled from 'styled-components/native';
import { white, rose, violet } from '@app/theme/colors';

export const AddTodoButton: React.SFC<TouchableOpacityProps> = props => (
  <Touchable onPress={props.onPress}>
    <Gradient from={rose.value} to={violet.value}>
      <Title>➕ &nbsp;ADD NEW TODO</Title>
    </Gradient>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  bottom: 20px;
`;

const Gradient = styled(GradientBackground)`
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
