import { handleActions } from 'redux-actions'

import { COMICS_REQUESTED, COMICS_RECEIVED, COMICS_ERROR } from './actions'

const comics = handleActions(
  {
    [COMICS_RECEIVED]: (state, action) => action.payload
  },
  {}
)

const isLoading = handleActions(
  {
    [COMICS_REQUESTED]: () => true,
    [COMICS_RECEIVED]: () => false,
    [COMICS_ERROR]: () => false
  },
  false
)

export { comics, isLoading }
