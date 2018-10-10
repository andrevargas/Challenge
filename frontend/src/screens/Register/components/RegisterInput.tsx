import * as React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from '@components/TextInput';
import { black, darkGrey, amethyst } from '@app/theme/colors';

export const RegisterInput: React.SFC<TextInputProps> = props => (
  <TextInput
    color={darkGrey.value}
    selectionColor={amethyst.value}
    borderColor={black.light(50).value}
    borderFocusedColor={amethyst.value}
    placeholderTextColor={black.light(50).alpha(0.5).value}
    {...props}
  />
);
