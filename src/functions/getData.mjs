import Axios from 'axios';
import md5 from 'crypto-js/md5';

const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.PRIVATE_KEY;

const getComicsData = async (week) => {
  const source = 'https://gateway.marvel.com/v1/public/comics?';
  const ts = Date.now().toString();
  const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`);
  const url = `${source}dateDescriptor=${week}Week&apikey=${PUBLIC_KEY}&ts=${ts}&hash=${hash}`;

  try {
    const response = await Axios.get(`${url}`);
    const { data } = await response;

    return data;
  } catch (err) {
    throw new Error();
  }
};

const getData = async (week) => {
  try {
    const data = await getComicsData(week);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default getData;
