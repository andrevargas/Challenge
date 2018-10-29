import * as React from 'react';
import { View, Text } from 'react-native';
import { Title } from '@app/components/core';
import { NavigationInjectedProps } from 'react-navigation';
import { white, black } from '@app/theme/colors';
import { ITodoNode } from '@app/interfaces/ITodoNode';

export class TodoDetailScreen extends React.Component<NavigationInjectedProps> {
  public static navigationOptions = {
    title: 'Todo details',
  };

  public render() {
    const item = this.props.navigation.getParam('item') as ITodoNode;
    return (
      <View style={{ flex: 1, backgroundColor: white.value, padding: 20 }}>
        <Title color={black.value}>{item.description}</Title>
        {item.date && (
          <Text style={{ color: black.value, fontSize: 30 }}>📅</Text>
        )}
      </View>
    );
  }
}
