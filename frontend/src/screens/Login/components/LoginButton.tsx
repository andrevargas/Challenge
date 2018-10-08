import * as React from 'react';
import styled from 'styled-components/native';

interface IProps {
  color?: string;
  background?: string;
  children: string;
  onPress?(event: any): void;
}

export const LoginButton: React.SFC<IProps> = ({
  onPress,
  color,
  background,
  children,
}) => (
  <Touchable onPress={onPress} style={{ backgroundColor: background }}>
    <Title style={{ color }}>{children}</Title>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 0;
  elevation: 10;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`;
