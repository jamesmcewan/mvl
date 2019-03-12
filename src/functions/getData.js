import Axios from 'axios';

const getData = async () => {
  const url = 'https://sleepy-badlands-68050.herokuapp.com/'

  try {
    const response = await Axios.get(
      `${url}`
    );

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
