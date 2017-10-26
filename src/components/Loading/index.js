import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LoadingText, LoadingScreen } from './loading.styles';
import {Bars} from 'react-native-loader';


class loading extends React.Component {
  constructor(){
    super();
  }


  render(){
    return(
      <LoadingScreen>
        <Bars color='white' size={50}/>
        <LoadingText>Loading...</LoadingText>
      </LoadingScreen>
    );
  }
}

export default connect(
  state => ({
    sources: state.news.sources
  }),
  {}
)(loading);
