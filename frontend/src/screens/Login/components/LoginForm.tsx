import * as React from 'react';
import { View } from 'react-native';

import { TextInput } from '@components/TextInput';
import { Button } from '@components/Button';

import styled from 'styled-components/native';
import { white, amethyst, yellow } from '@app/theme/colors';

interface IState {
  email?: string;
  password?: string;
}

interface IProps {
  renderAfter: React.ReactElement<any>;
  renderBefore: React.ReactElement<any>;
  onSubmit: (state: IState) => any;
}

export class LoginForm extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
    password: '',
  };

  public render() {
    return (
      <View>
        <FormWrapper>
          {this.props.renderBefore}
          <TextInput
            value={this.state.email}
            onChangeText={this.handleChange('email')}
            placeholder="E-mail"
            textContentType="emailAddress"
            keyboardType="email-address"
            color={white.value}
            placeholderTextColor={white.alpha(0.6).value}
            borderColor={white.alpha(0.5).value}
            borderFocusedColor={yellow.value}
          />
          <TextInput
            value={this.state.password}
            onChangeText={this.handleChange('password')}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            color={white.value}
            placeholderTextColor={white.alpha(0.6).value}
            borderColor={white.alpha(0.5).value}
            borderFocusedColor={yellow.value}
          />
          {this.props.renderAfter}
        </FormWrapper>
        <Button
          onPress={this.handleSubmit}
          color={amethyst.value}
          backgroundColor={white.value}>
          LET ME IN! 👉
        </Button>
      </View>
    );
  }

  private handleChange = (field: string) => (text: string) => {
    this.setState({ [field]: text });
  };

  private handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
}

const FormWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0 20px;
`;
