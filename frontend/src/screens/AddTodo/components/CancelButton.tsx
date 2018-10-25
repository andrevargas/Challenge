import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';

import styled from 'styled-components/native';
import { tomato } from '@app/theme/colors';

export const CancelButton: React.SFC<TouchableOpacityProps> = props => (
  <Button onPress={props.onPress}>
    <Text>{props.children}</Text>
  </Button>
);

const Button = styled.TouchableOpacity`
  padding: 5px 20px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${tomato.value};
`;
