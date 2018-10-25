import * as React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import styled from 'styled-components/native';
import { white, amethyst } from '@app/theme/colors';

export class BootstrapScreen extends React.Component<NavigationInjectedProps> {
  public render() {
    return (
      <Wrapper>
        <ActivityIndicator color={amethyst.value} size={200} animating={true} />
      </Wrapper>
    );
  }

  public componentDidMount() {
    this.bootstrap();
  }

  public async bootstrap() {
    const token = await AsyncStorage.getItem('@@auth_token');
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  }
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${white.value};
`;
