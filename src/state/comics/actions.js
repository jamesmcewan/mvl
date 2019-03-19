import { createAction } from 'redux-actions';
import getData from '../../functions/getData';

export const COMICS_REQUESTED = 'COMICS_REQUESTED';
export const COMICS_RECEIVED = 'COMICS_RECEIVED';
export const COMICS_REQUEST_ERROR = 'COMICS_REQUEST_ERROR';

const comicsRequested = createAction(COMICS_REQUESTED);

const comicsRequestError = createAction(COMICS_REQUEST_ERROR);

const comicsReceived = createAction(COMICS_RECEIVED);

const requestComics = async (dispatch, weekId) => {
  dispatch(comicsRequested());

  try {
    const data = await getData(process.env.REACT_APP_SOURCE, weekId);

    dispatch(comicsReceived(await data));
  } catch (err) {
    dispatch(comicsRequestError(err));
  }
};

const requestComicsIfNeeded = (comics, weekId) => dispatch => {
  if (comics.length === 0) {
    dispatch(requestComics(dispatch, weekId));
  }
};

export { requestComicsIfNeeded };
