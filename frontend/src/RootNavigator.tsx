import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from '@screens/Login';
import { RegisterScreen } from '@screens/Register';

export const RootNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  {
    headerMode: 'none',
  }
);
