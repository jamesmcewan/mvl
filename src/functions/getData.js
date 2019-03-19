import Axios from 'axios';

const getData = async (source, weekId) => {
  try {
    const response = await Axios.get(`${source}/${weekId}`);

    const {
      data: {
        data: { results }
      }
    } = await response;

    return results;
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;
