import React from 'react';
import styled from 'styled-components/native';

export const Counter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: 100;
  margin-bottom: 100;
  border-radius: 5;
  border: solid;
  border-color: white;
`;

export const Number = styled.Text`
  font-size: 100;
  color: white;
  background-color: transparent;
`;

export const Dot = styled.View`
  height: 150;
  width: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid;
  border-color: black;
  border-radius: 100;
  background: springgreen;
`;

export const ButtonBlock = styled.View`
  height: 100;
  padding-top: 40;
  display: flex;
  flex-direction: row;
`;
