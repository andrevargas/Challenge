import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { BootstrapScreen } from '@screens/Bootstrap';
import { LoginScreen } from '@screens/Login';
import { RegisterScreen } from '@screens/Register';
import { TodoListScreen } from '@screens/TodoList';
import { AddTodoScreen } from '@screens/AddTodo';

const AppNavigator = createStackNavigator(
  {
    AddTodo: {
      screen: AddTodoScreen,
    },
    TodoList: {
      screen: TodoListScreen,
    },
  },
  {
    headerMode: 'float',
    initialRouteName: 'TodoList',
  }
);

const AuthNavigator = createStackNavigator(
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
    initialRouteName: 'Login',
  }
);

export const RootNavigator = createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
    Bootstrap: {
      screen: BootstrapScreen,
    },
  },
  {
    initialRouteName: 'Bootstrap',
  }
);
