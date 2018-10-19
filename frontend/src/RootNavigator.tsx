import { createStackNavigator } from 'react-navigation';

import { LoginScreen } from '@screens/Login';
import { RegisterScreen } from '@screens/Register';
import { TodoListScreen } from '@screens/TodoList';
import { AddTodoScreen } from '@screens/AddTodo';

export const RootNavigator = createStackNavigator(
  {
    AddTodo: {
      screen: AddTodoScreen,
    },
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
    headerMode: 'float',
    initialRouteName: 'AddTodo',
  }
);
