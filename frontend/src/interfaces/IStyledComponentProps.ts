import { ViewStyle, TextStyle } from 'react-native';

export interface IStyledComponentProps extends ViewStyle, TextStyle {
  [key: string]: any;
}
