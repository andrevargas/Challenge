import * as React from 'react';
import { TextInputProps } from 'react-native';
import styled, { StyledFunction } from 'styled-components/native';
import { hsla } from '@app/styles';

interface IState {
  focused: boolean;
}

interface IProps {
  color?: string;
  borderColor?: string;
  borderFocusedColor?: string;
}

const white = hsla(0, 100, 100, 0.5);

export class TextInput extends React.Component<
  IProps & TextInputProps,
  IState
> {
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

interface IInputExtraProps {
  focused?: boolean;
  color?: string;
  borderColor?: string;
  borderFocusedColor?: string;
}

const styledInput: StyledFunction<IInputExtraProps & TextInputProps> =
  styled.TextInput;

export const Input = styledInput`
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
