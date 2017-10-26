import api from '../api';
import store from '../Store';
import { Actions } from 'react-native-router-flux';

import getColor from '../colorWheel';

const setSources = sources => ({
  type: 'SET_SOURCES',
  sources: sources.map( source => ({
    ...source,
    color: getColor(),
  }),
                      )
});

export const getSources = () => dispatch => (
  api
    .sources()
    .then(({data}) => store
      .dispatch(setSources(data.sources))
    )
    .then(() =>
          Actions['root'].call() 
         )
    .catch(err => console.log(err))
);

export const setHeadlines = ({articles, source}, src) => ({
  type: 'SET_HEADLINES',
  source: {
    id: source,
    name: src.name
  },
  color: src.color,
  articles,
})

export const viewHeadlines = source => dispatch => (
  api
    .headlines(source.id)
    .then(({data}) => store
          .dispatch(setHeadlines(data, source))
         )
    .then(() =>
          Actions['headlines'].call()
         )
    .catch(err => console.log(err))
);
