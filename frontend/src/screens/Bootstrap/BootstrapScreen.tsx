import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

export class BootstrapScreen extends React.Component<NavigationInjectedProps> {
  public render() {
    return null;
  }

  public componentDidMount() {
    this.bootstrap();
  }

  private async bootstrap() {
    const token = await AsyncStorage.getItem('@@auth_token');
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  }
}
