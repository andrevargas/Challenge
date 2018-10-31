import * as React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { formatDistance, format } from 'date-fns';

import { ITodoNode } from '@app/interfaces/ITodoNode';

import styled from 'styled-components/native';
import { white, black, darkGrey } from '@app/theme/colors';

export class TodoDetailScreen extends React.Component<
  NavigationInjectedProps<{ item: ITodoNode }>
> {
  public static navigationOptions = {
    title: 'Todo details',
  };

  public render() {
    const item = this.props.navigation.getParam('item');
    return (
      <Wrapper>
        <Title>{item.description}</Title>
        {item.createdAt && (
          <Subtitle>
            Created {formatDistance(new Date(item.createdAt), new Date())} ago
          </Subtitle>
        )}
        <SectionTitle>Due date</SectionTitle>
        <SectionText>
          📅{' '}
          {item.date
            ? format(new Date(item.date), 'dd/MM/yyyy')
            : 'Who cares about dates?'}
        </SectionText>
        <SectionTitle>Status</SectionTitle>
        <SectionText>✨ Procrastinated</SectionText>
        <EmojiWrapper>
          <Emoji source={require('@assets/no-good-emoji.png')} />
        </EmojiWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  background-color: ${white.value};
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-family: 'sans-serif-medium';
  color: ${black.value};
`;

const Subtitle = styled.Text`
  color: ${darkGrey.light(40).value};
  font-size: 18;
  margin-bottom: 30px;
`;

const SectionTitle = styled.Text`
  color: ${black.value};
  font-size: 20;
  margin-bottom: 5;
  font-weight: bold;
`;

const SectionText = styled.Text`
  color: ${black.value};
  font-size: 22px;
  margin-bottom: 20px;
`;

const EmojiWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Emoji = styled.Image`
  width: 170px;
  height: 170px;
`;
