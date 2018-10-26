import * as React from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import styled from 'styled-components/native';
import { black, white, amethyst } from '@app/theme/colors';

interface IProps {
  color?: string;
  loading?: boolean;
}

const noop = () => null;

export const LoadingOverlay: React.SFC<IProps> = props => (
  <Modal
    transparent={true}
    animationType="fade"
    visible={props.loading}
    onRequestClose={noop}>
    <Backdrop>
      <IndicatorWrapper>
        <ActivityIndicator animating={true} color={props.color} size={70} />
      </IndicatorWrapper>
    </Backdrop>
  </Modal>
);

LoadingOverlay.defaultProps = {
  color: amethyst.value,
};

const Backdrop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${black.alpha(0.2).value};
`;

const IndicatorWrapper = styled.View`
  padding: 50px;
  background-color: ${white.value};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
