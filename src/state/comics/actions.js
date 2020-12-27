import { createAction } from 'redux-actions'
import getData from '../../functions/getData'

const COMICS_REQUESTED = 'COMICS_REQUESTED'
const COMICS_RECEIVED = 'COMICS_RECEIVED'
const COMICS_ERROR = 'COMICS_ERROR'

const comicsRequested = createAction(COMICS_REQUESTED)
const comicsReceived = createAction(COMICS_RECEIVED)
const comicsError = createAction(COMICS_ERROR)

const requestComics = () => async (dispatch) => {
  dispatch(comicsRequested())

  try {
    const data = await getData()
    dispatch(comicsReceived(await data))
  } catch (err) {
    dispatch(comicsError(err))
  }
}

export {
  requestComics,
  comicsRequested,
  comicsReceived,
  comicsError,
  COMICS_REQUESTED,
  COMICS_RECEIVED,
  COMICS_ERROR
}
