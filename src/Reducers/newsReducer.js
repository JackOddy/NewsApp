const INIT = {
  sources: [],
  headlines: {
    source: {},
    articles: [],
  },
  story: {},
};

export default (state = INIT, {type, ...payload}) => {
  switch (type) {
  case 'SET_SOURCES':
    return {
      ...state,
      sources: payload.sources,
    };
  case 'SET_HEADLINES':
    return {
      ...state,
      headlines: {
        source: payload.source,
        articles: payload.articles,
      }
    };
  default:
    return state;
  }
}
