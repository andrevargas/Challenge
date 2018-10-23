import styled from 'styled-components/native';
import { IStyledComponentProps } from '@app/interfaces/IStyledComponentProps';
import { amethyst } from '@app/theme/colors';

export const Title = styled.Text<IStyledComponentProps>`
  color: ${props => props.color};
  font-size: 32px;
  font-family: 'sans-serif-medium';
  margin-bottom: 5%;
`;

Title.defaultProps = {
  color: amethyst.value,
};
