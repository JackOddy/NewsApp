import React from 'react';

import { Counter, Number, Dot, ButtonBlock } from './counter.styles';
import {IncButton, DecButton} from '../common/Buttons'

export default ({n, inc, dec}) => (
  <Counter>
    <Dot>
      <Number>{n}</Number>
    </Dot>
    <ButtonBlock>
      <DecButton onPress={() => dec()}>-</DecButton>
      <IncButton onPress={() => inc()}>+</IncButton>
    </ButtonBlock>
  </Counter>
)
