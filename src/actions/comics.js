import getData from '../getData';

export const GET_COMICS = 'GET_COMICS';
export const ERROR = 'ERROR';
export const OPEN_SPOTLIGHT = 'OPEN_SPOTLIGHT';
export const CLOSE_SPOTLIGHT = 'CLOSE_SPOTLIGHT';

export const getComics = dateDescriptor => {
  return async dispatch => {
    try {
      const response = await getData(dateDescriptor);
      const { comics } = await response;
      return dispatch({
        type: 'GET_COMICS',
        data: comics,
      });
    } catch (err) {
      return dispatch({
        type: 'ERROR',
        data: `${err.toString()}`,
      });
    }
  };
};

export const openSpotlight = (e, comicId, currentComics) => {
  e.preventDefault();

  // TODO: clean this up

  const comics = [...currentComics];
  const result = comics.filter(comic => comic.id === comicId);

  const [
    {
      description,
      title,
      thumbnail,
      creators: { items },
      diamondCode,
      urls,
      dates,
    },
  ] = result;

  const spotlight = {
    description,
    title,
    thumbnail,
    creators: items,
    diamondCode,
    urls,
    dates,
  };
  return async dispatch =>
    dispatch({ type: 'OPEN_SPOTLIGHT', data: spotlight });
};

export const closeSpotlight = e => {
  e.preventDefault();
  return async dispatch => dispatch({ type: 'CLOSE_SPOTLIGHT' });
};
