import styled from 'styled-components/native';
import { Text, TextProps } from 'react-native';
import { amethyst } from '@app/theme/colors';

interface IProps extends TextProps {
  color?: string;
}

export const Title = styled<IProps>(Text)`
  color: ${props => props.color};
  font-size: 32px;
  font-family: 'sans-serif-medium';
  margin-bottom: 5%;
`;

Title.defaultProps = {
  color: amethyst.value,
};
