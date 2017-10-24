import React from 'react';
import styled from 'styled-components/native';

export const Button = styled.TouchableHighlight`
  width: 100;
  height: 75;
  background-color: ${props => props.color};
  display: flex;
  border: solid;
  margin-left: 5;
  margin-right: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 40;
  color: white;
`;
