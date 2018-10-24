import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { GradientBackground } from '../layout/GradientBackground';

import styled from 'styled-components/native';
import { IStyledComponentProps } from '@app/interfaces/IStyledComponentProps';
import { rose, violet } from '@app/theme/colors';

interface IProps extends TouchableOpacityProps, IStyledComponentProps {
  children: string;
}

export const GradientButton: React.SFC<IProps> = props => (
  <Touchable onPress={props.onPress}>
    <GradientBackground
      to={violet.value}
      from={rose.value}
      style={{ padding: 20 }}>
      <Title color={props.color}>{props.children}</Title>
    </GradientBackground>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  elevation: 10;
`;

const Title = styled.Text<IStyledComponentProps>`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${props => props.color};
`;
