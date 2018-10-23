import * as React from 'react';
import { RootNavigator } from './RootNavigator';

import { ApolloProvider } from 'react-apollo';
import { client } from './createApolloClient';

export class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    );
  }
}
