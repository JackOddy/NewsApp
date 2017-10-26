import React from 'react';
import {Text} from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';


import NewsSources from './components/NewsSources';
import Headlines from './components/Headlines';
import LoadingScreen from './components/Loading';

import { getSources } from './Actions/newsActions';


export default ({sources}) => (
  <Router wrapedBy={connect}>
    <Scene hideNavBar key='app' title='Neue News'>
      <Scene key='init' onEnter={ getSources() } component={LoadingScreen} init />
      <Stack key='root'>
    <Scene key='sources' component={NewsSources} initial/>
        <Scene key='headlines' component={Headlines} backTitle='Home' />
    </Stack>
    </Scene>
  </Router>
);
