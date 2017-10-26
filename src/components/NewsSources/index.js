import React from 'react';
import { connect } from 'react-redux';

import {Grid, Tile, Icon, Row} from './NewsSources.styles.js'
import SourceIcon from './SourceIcon';

import { viewHeadlines } from '../../Actions/newsActions';

const Sources = ({sources}) => (
  <Grid>
    <Row>
    {
      sources
        .map(
          source => (
              <SourceIcon
                {...source}
                onPress={() => viewHeadlines(source)}
                key={source.id}
              />
        ))
    }
      </Row>
  </Grid>
);

const mapStateToProps = state => ({
  sources: state.news.sources
});

const mapDispatchToProps = {
  viewHeadlines,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
