import Axios from 'axios';

const getComicsData = async weekId => {
  const source = process.env.REACT_APP_SOURCE;
  try {
    const response = await Axios.get(`${source}/${weekId}`);
    const { results } = await response.data.data;

    return results;
  } catch (err) {
    throw new Error(err);
  }
};

const getData = async () => {
  try {
    const thisweek = await getComicsData('thisweek');
    const lastweek = await getComicsData('lastweek');
    const nextweek = await getComicsData('nextweek');

    return { thisweek, lastweek, nextweek };
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;
