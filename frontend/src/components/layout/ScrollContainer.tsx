import * as React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

export const ScrollContainer: React.SFC<ScrollViewProps> = props => (
  <ScrollView
    contentContainerStyle={[{ flexGrow: 1 }, props.contentContainerStyle]}
    {...props}
  />
);
