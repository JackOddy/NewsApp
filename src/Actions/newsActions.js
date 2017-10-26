import api from '../api';
import store from '../Store';
import { Actions } from 'react-native-router-flux';

const setSources = sources => ({
  type: 'SET_SOURCES',
  sources,
});

export const getSources = () => dispatch => (
  api
    .sources()
    .then(({data}) => store
      .dispatch(setSources(data.sources))
    )
);

export const setHeadlines = ({articles, source}, name) => ({
  type: 'SET_HEADLINES',
  source: {
    id: source,
    name
  },
  articles,
})

export const viewHeadlines = source => dispatch => {
  console.log('viewing headlines')
 return api
    .headlines(source.id)
    .then(({data}) => store
          .dispatch(setHeadlines(data, source.name))
         )
    .then(() =>
          Actions['headlines'].call()
         )
    .catch(err => console.log(err))
};
