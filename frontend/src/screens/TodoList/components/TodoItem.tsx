import * as React from 'react';

import styled from 'styled-components/native';
import { darkGrey, black } from '@app/theme/colors';
import { View } from 'react-native';

export const TodoItem: React.SFC = props => (
  <Touchable>
    <Checkmark />
    <Text>{props.children}</Text>
  </Touchable>
);

const Touchable = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-color: ${black.alpha(0.1).value};
  border-bottom-width: 1px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${darkGrey.value};
  width: 100%;
  flex: 1;
`;

const Checkmark = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 50;
  border-color: ${black.light(50).value};
  border-width: 1px;
  margin-right: 20px;
`;
