import axios from 'axios';
import { NEWS_KEY } from './.env.json';


export default (() => {
  const client = () => axios
        .create({
          headers: {
            'X-Api-Key': NEWS_KEY
          }
        });

  return {
    sources: () => client()
      .get('https://newsapi.org/v1/sources', {
        params: {
          language: 'en'
        }
      }),
    headlines: source => client()
      .get(`https://newsapi.org/v1/articles`, {
        params: {
          source,
        }
      }),
  };
})();
