import React from 'react';
import styled from 'styled-components/native';

export const Page = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.color};
`;

export const Title = styled.Text`
  margin-top: 10;
  font-size: 30;
  color: white;
`;

export const SmlTitle = styled.Text`
  font-size: 20;
  color: white;
  padding-left: 5;
  padding-right: 5;
  padding-top: 5;

  padding-bottom: 5;
`;

export const HeadlineContainer = styled.View`
  margin-top: 10;
  margin-left: 5;
  margin-right: 5;
  background-color: rgba(20,20,20,0.5);
  opacity: 0.8;
`;

export const Body = styled.Text`
  font-size: 15;
  padding-left: 5;
  padding-right: 5;
  padding-top: 10;
  padding-bottom: 10;
  background-color: white;
`;

export const HeadlineImage = styled.Image`
  height: 200;
`;
