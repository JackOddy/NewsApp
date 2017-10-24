import React from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import { increment, decrement } from './Actions/counterActions';

const Viewport = ({n, increment, decrement}) => (
    <Counter
      n={n}
      inc={increment}
      dec={decrement}
    />
);

const mapStateToProps = state => ({
  n: state.number
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewport);
