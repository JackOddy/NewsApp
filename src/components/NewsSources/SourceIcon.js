import React from 'react';
import {Grid, Tile, Icon, Row} from './NewsSources.styles.js'
import { viewHeadlines } from '../../Actions/newsActions';

export default (source) => (
    <Tile key={source.id} onPress={viewHeadlines(source)}>
    <Icon>{source.name}</Icon>
    </Tile>
)
