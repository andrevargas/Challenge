import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import styled from 'styled-components/native';
import { white, amethyst } from '@app/theme/colors';

export class AddTodoScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = () => ({
    headerRight: (
      <RightButton>
        <Text>SAVE</Text>
      </RightButton>
    ),
  });

  public render() {
    return <Wrapper />;
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${white.value};
`;

const RightButton = styled.TouchableOpacity`
  background-color: ${amethyst.value};
  padding: 5px 20px;
  margin-right: 10px;
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${white.value};
`;
