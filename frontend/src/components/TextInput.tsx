import * as React from 'react';
import { TextInputProps } from 'react-native';
import styled, { StyledFunction } from 'styled-components/native';

interface IState {
  focused: boolean;
}

export class TextInput extends React.Component<TextInputProps, IState> {
  public state: IState = { focused: false };

  public render() {
    return (
      <Input
        {...this.props}
        selectionColor="hsla(0, 100%, 100%, 0.3)"
        placeholderTextColor="hsla(0, 100%, 100%, 0.5)"
        underlineColorAndroid="transparent"
        onBlur={this.toggleFocus}
        onFocus={this.toggleFocus}
        focused={this.state.focused}
      />
    );
  }

  private toggleFocus = () => {
    this.setState({ focused: !this.state.focused });
  };
}

interface IInputExtraProps {
  focused?: boolean;
}

const input: StyledFunction<IInputExtraProps & TextInputProps> =
  styled.TextInput;

export const Input = input`
  width: 100%;
  color: white;
  font-size: 22px;
  padding-vertical: 10px;
  background-color: transparent;
  border-bottom-width: 1px;
  border-bottom-color: ${(props: IInputExtraProps) =>
    props.focused ? 'yellow' : 'hsla(0, 100%, 100%, 0.5)'};
  margin-bottom: 20px;
`;
