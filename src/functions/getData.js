import Axios from 'axios';

function currentURL(currentPlatform, weekId) {
  if (!currentPlatform) {
    return `/api/${weekId}`;
  }

  return `${currentPlatform}/api?week=${weekId || 'thisWeek'}`;
}

const getComicsData = async (weekId) => {
  try {
    const response = await Axios.get(
      currentURL(process.env.REACT_APP_CURRENT_PLATFORM, weekId)
    );
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
