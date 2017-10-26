import React from 'react';
import {Text} from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';


import NewsSources from './components/NewsSources';
import Headlines from './components/Headlines';

import { getSources } from './Actions/newsActions';

export default () => (
  <Router wrapedBy={connect}>
    <Stack key='root'>
    <Scene key='sources' onEnter={getSources()} component={NewsSources} />
    <Scene key='headlines' onEnter={props => console.log(props)} component={Headlines} />
    </Stack>
  </Router>
);
