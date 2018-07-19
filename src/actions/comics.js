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

export const openSpotlight = (comicId, currentComics) => {
  // TODO: clean this up
  const comics = [...currentComics];
  const issue = comics.filter(comic => comic.id === comicId)[0];

  return async dispatch =>
    dispatch({
      type: 'OPEN_SPOTLIGHT',
      data: issue,
    });
};

export const closeSpotlight = () => async dispatch =>
  dispatch({
    type: 'CLOSE_SPOTLIGHT',
  });
