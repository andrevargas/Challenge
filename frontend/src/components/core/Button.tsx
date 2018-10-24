import * as React from 'react';
import { TouchableOpacityProps, ViewStyle } from 'react-native';

import styled from 'styled-components/native';
import { IStyledComponentProps } from '@app/interfaces/IStyledComponentProps';

interface IProps extends TouchableOpacityProps, IStyledComponentProps {
  children?: string;
}

export const Button: React.SFC<IProps> = props => (
  <Touchable onPress={props.onPress} background={props.backgroundColor}>
    <Title color={props.color}>{props.children}</Title>
  </Touchable>
);

const Touchable = styled.TouchableOpacity<IStyledComponentProps>`
  width: 100%;
  padding: 20px 0;
  background-color: ${props => props.background};
  elevation: 10;
`;

const Title = styled.Text<IStyledComponentProps>`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${props => props.color};
`;
