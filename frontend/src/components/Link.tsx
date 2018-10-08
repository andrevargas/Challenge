import * as React from 'react';
import styled from 'styled-components/native';

interface IProps {
  color?: string;
  children: React.ReactNode;
  onPress?(): void;
}

export const Link: React.SFC<IProps> = props => (
  <Touchable onPress={props.onPress}>
    <LinkText style={{ color: props.color }}>{props.children}</LinkText>
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