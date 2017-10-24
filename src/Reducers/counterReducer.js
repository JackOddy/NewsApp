const INIT = 0;

export default (state = INIT, {type, ...payload}) => {
  switch(type) {
  case 'INCR':
    return state + 1;
  case 'DECR':
    return state - 1;
  default:
    return state;
  }
}
