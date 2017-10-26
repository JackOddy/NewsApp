import React from 'react';
import { connect } from 'react-redux';

import {Page, Title, Row} from './Headline.styles.js'
import Headline from './Headline';

const Headlines = ({color, articles, source}) => (
    <Page color={color}>
    <Title> {source.name} </Title>
    {
      articles
        .map(headline =>
             <Headline {...headline} key={headline.description} />
            )
    }
    </Page>
);

const mapStateToProps = state => ({
  ...state.news.headlines,
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headlines);
