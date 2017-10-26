import React from 'react';
import styled from 'styled-components/native';

export const Grid = styled.ScrollView`
  background-color: yellow;
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: green;
  flexWrap: wrap;
`;


export const Tile = styled.TouchableHighlight`
  background-color: blue;
  border: solid;
  height: 170;
  width: 170;
  margin-top: 5;
  margin-left: 5;
  margin-bottom: 5;
  margin-right: 5;
`;

export const Icon = styled.Text`
  font-size: 10;
`;
