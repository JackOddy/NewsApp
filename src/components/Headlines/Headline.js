import React from 'react';

import { HeadlineContainer, SmlTitle, HeadlineImage, Body} from './Headline.styles';

export default ({title, description, urlToImage}) => (
  <HeadlineContainer>
    <SmlTitle>{title}</SmlTitle>
    <HeadlineImage source={{uri: urlToImage}} />
    <Body>{description}</Body>
  </HeadlineContainer>
);
