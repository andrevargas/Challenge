import * as React from 'react';
import { View } from 'react-native';

import { Title } from '@components/Title';
import { Link } from '@components/Link';
import { TextInput } from '@components/TextInput';
import { GradientButton } from '@components/GradientButton';

import styled from 'styled-components/native';
import { amethyst, darkGrey, white } from '@app/theme/colors';

interface IState {
  name?: string;
  email?: string;
  password?: string;
}

interface IProps {
  onSubmit: (variables: IState) => any;
}

export class RegisterForm extends React.Component<IProps, IState> {
  public state: IState = {
    name: '',
    email: '',
    password: '',
  };

  public render() {
    return (
      <View>
        <Wrapper>
          <Title>Create your account</Title>
          <Info>
            You're almost there! We just need your data, but relax, we promise
            we won't sell it.
          </Info>
          <TextInput
            value={this.state.name}
            onChangeText={this.handleChange('name')}
            placeholder="Name"
            textContentType="name"
          />
          <TextInput
            value={this.state.email}
            onChangeText={this.handleChange('email')}
            placeholder="E-mail"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            value={this.state.password}
            onChangeText={this.handleChange('password')}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
          />
          {this.props.children}
        </Wrapper>
        <GradientButton color={white.value} onPress={this.handleSubmit}>
          CREATE MY ACCOUNT ⚡
        </GradientButton>
      </View>
    );
  }

  private handleChange = (field: keyof IState) => (text: string) => {
    this.setState({ [field]: text });
  };

  private handleSubmit = () => {
    this.props.onSubmit(this.state);
  };
}

const Info = styled.Text`
  color: ${darkGrey.value};
  font-size: 18px;
  margin-bottom: 5%;
`;

const Wrapper = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${white.value};
`;
