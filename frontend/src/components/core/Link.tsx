import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { IStyledComponentProps } from '@app/interfaces/IStyledComponentProps';

type Props = TouchableOpacityProps & IStyledComponentProps;

export const Link: React.SFC<Props> = props => (
  <Touchable onPress={props.onPress}>
    <LinkText color={props.color}>{props.children}</LinkText>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 5%;
`;

const LinkText = styled.Text<IStyledComponentProps>`
  color: ${props => props.color};
  font-size: 20px;
`;
