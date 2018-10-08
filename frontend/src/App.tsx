import * as React from 'react';
import { LoginScreen } from './screens/Login';
import { RegisterScreen } from './screens/Register';

export class App extends React.Component {
  public render() {
    return <RegisterScreen />;
  }
}
