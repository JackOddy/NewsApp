import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import getColor from '../../colorWheel';

const getWidth = () => {
  const {width} = Dimensions.get('window'); 
  return width;
}

export const Grid = styled.ScrollView`
  background-color: whitesmoke;
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flexWrap: wrap;
`;


export const Tile = styled.TouchableHighlight`
  background-color: ${props => props.color};
  height: ${getWidth() / 2};
  width: 100%;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 10;
`;

export const Shadow = styled.View`
  width: 100%;
  height: 1;
  background-color: green;
`;

export const Icon = styled.Text`
  font-size: 20;
  color: white;
`;
