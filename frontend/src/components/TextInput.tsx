import * as React from 'react';
import { TextInput as TextInputNative, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { white } from '@app/theme/colors';

interface IState {
  focused: boolean;
}

interface IProps extends TextInputProps {
  color?: string;
  borderColor?: string;
  borderFocusedColor?: string;
  focused?: boolean;
}

export class TextInput extends React.Component<IProps, IState> {
  public state: IState = { focused: false };

  public render() {
    const { color, borderColor, borderFocusedColor } = this.props;
    return (
      <Input
        selectionColor={white.alpha(0.3).value}
        placeholderTextColor={white.value}
        {...this.props}
        onBlur={this.toggleFocus}
        onFocus={this.toggleFocus}
        focused={this.state.focused}
        underlineColorAndroid="transparent"
        color={color}
        borderColor={borderColor}
        borderFocusedColor={borderFocusedColor}
      />
    );
  }

  private toggleFocus = () => {
    this.setState({ focused: !this.state.focused });
  };
}

export const Input = styled<IProps>(TextInputNative)`
  width: 100%;
  color: ${props => props.color};
  font-size: 22px;
  padding-vertical: 10px;
  background-color: transparent;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.focused ? props.borderFocusedColor : props.borderColor};
  margin-bottom: 20px;
`;

Input.defaultProps = {
  borderColor: white.value,
  borderFocusedColor: white.value,
  color: white.value,
};
