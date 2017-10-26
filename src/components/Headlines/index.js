import React from 'react';
import { connect } from 'react-redux';

import {Page, Title, Row} from './Headline.styles.js'
import Headline from './Headline';

const Headlines = ({articles, source}) => (
    <Page>
    <Title> {source.name} </Title>
    {
      articles
        .map(headline =>
             <Headline{...headline} key={headline.description} />
            )
    }
    </Page>
);

const mapStateToProps = state => ({
  articles: state.news.headlines.articles,
  source: state.news.headlines.source
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Headlines);
