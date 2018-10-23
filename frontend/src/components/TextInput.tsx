import * as React from 'react';
import { TextInputProps } from 'react-native';

import styled from 'styled-components/native';
import { IStyledComponentProps } from '@app/interfaces/IStyledComponentProps';
import { darkGrey, amethyst, black } from '@app/theme/colors';

interface IState {
  focused: boolean;
}

interface IProps extends TextInputProps, IStyledComponentProps {
  borderFocusedColor?: string;
  focused?: boolean;
}

export class TextInput extends React.Component<IProps, IState> {
  public state: IState = { focused: false };

  public render() {
    const { color, borderColor, borderFocusedColor } = this.props;
    return (
      <Input
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

export const Input = styled.TextInput<IProps>`
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
  borderColor: black.light(50).value,
  borderFocusedColor: amethyst.value,
  color: darkGrey.value,
  placeholderTextColor: black.light(50).alpha(0.5).value,
  selectionColor: amethyst.value,
};
