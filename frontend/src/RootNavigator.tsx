import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from '@screens/Login';
import { RegisterScreen } from '@screens/Register';
import { TodoListScreen } from '@screens/TodoList';

export const RootNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    TodoList: {
      screen: TodoListScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'TodoList',
  }
);
