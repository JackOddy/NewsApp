import React from 'react';
import { Button, ButtonText } from './button.styles';

export const DecButton =  ({children, onPress}) => (
  <Button color='rgb(30,144,255)' underlayColor='rgb(10, 124, 235)' onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

export const IncButton = ({children, onPress}) => (
  <Button color='rgb(255,99,71)' underlayColor='rgb(235, 79, 51)' onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </Button>
);
