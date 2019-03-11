import getData from '../getData';

export const GET_COMICS = 'GET_COMICS';
export const ERROR = 'ERROR';
export const OPEN_SPOTLIGHT = 'OPEN_SPOTLIGHT';
export const CLOSE_SPOTLIGHT = 'CLOSE_SPOTLIGHT';

export const getComics = dateDescriptor => {
  return async dispatch => {
    try {
      const response = await getData(dateDescriptor);
      const {
        data: { results },
      } = await response;

      return dispatch({
        type: 'GET_COMICS',
        data: results,
      });
    } catch (err) {
      return dispatch({
        type: 'ERROR',
        data: `${err.toString()}`,
      });
    }
  };
};

export const openSpotlight = ({
  title,
  thumbnail,
  description,
  creators,
  diamondCode,
  urls,
}) => async dispatch => {
  const { items } = creators;
  return dispatch({
    type: 'OPEN_SPOTLIGHT',
    data: {
      title,
      thumbnail,
      description,
      creators: items,
      diamondCode,
      urls,
    },
  });
};

export const closeSpotlight = () => async dispatch =>
  dispatch({
    type: 'CLOSE_SPOTLIGHT',
  });
