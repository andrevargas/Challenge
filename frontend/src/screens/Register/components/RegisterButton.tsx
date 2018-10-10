import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';
import { rose, violet } from '@app/theme/colors';

interface IProps {
  color?: string;
  children: string;
  onPress?(event: any): void;
}

export const RegisterButton: React.SFC<IProps> = props => (
  <Touchable onPress={props.onPress}>
    <Gradient
      end={{ x: 2, y: 1 }}
      start={{ x: 0, y: 1 }}
      colors={[rose.value, violet.value]}>
      <Title style={{ color: props.color }}>{props.children}</Title>
    </Gradient>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  elevation: 10;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  padding: 20px 0;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
`;
