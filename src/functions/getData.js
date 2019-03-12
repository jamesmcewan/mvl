import Axios from 'axios';

const getData = async () => {
  const dateDescriptor = 'thisWeek';
  const API_KEY = process.env.REACT_APP_MARVEL_KEY;
  const dataUrl = 'https://gateway.marvel.com/v1/public/comics';

  try {
    const response = await Axios.get(
      `${dataUrl}?dateDescriptor=${dateDescriptor}&apikey=${API_KEY}`
    );

    const {
      data: {
        data: { results }
      }
    } = await response;

    return results;
  } catch (err) {
    return [];
  }
};

export default getData;
