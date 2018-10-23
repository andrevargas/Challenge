import * as React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface IProps extends Partial<LinearGradientProps> {
  to: string;
  from: string;
  children?: React.ReactNode;
}

export const GradientBackground: React.SFC<IProps> = props => (
  <LinearGradient
    end={{ x: 2, y: 1 }}
    start={{ x: 0, y: 1 }}
    style={[{ flex: 1 }, props.style]}
    colors={[props.from, props.to]}
    {...props}>
    {props.children}
  </LinearGradient>
);
