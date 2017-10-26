import React from 'react';

import { HeadlineContainer, SmlTitle } from './Headline.styles';

export default ({title, description}) => (
  <HeadlineContainer>
    <SmlTitle>{title}</SmlTitle>
  </HeadlineContainer>
);
