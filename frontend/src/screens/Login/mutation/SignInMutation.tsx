import * as React from 'react';
import { AsyncStorage } from 'react-native';
import { Mutation, MutationProps } from 'react-apollo';
import gql from 'graphql-tag.macro';

type Props = Pick<MutationProps, 'children'>;

interface IData {
  token: string;
}

export class SignInMutation extends React.Component<Props> {
  public render() {
    return (
      <Mutation mutation={SIGN_IN} onCompleted={this.handleCompleted}>
        {this.props.children}
      </Mutation>
    );
  }

  private handleCompleted = async (data: IData) => {
    try {
      await AsyncStorage.setItem('@@auth_token', data.token);
    } catch (error) {
      console.error(error);
    }
  };
}

const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(input: $input) {
      token
    }
  }
`;
