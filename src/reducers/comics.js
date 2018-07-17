import {
  GET_COMICS,
  ERROR,
  OPEN_SPOTLIGHT,
  CLOSE_SPOTLIGHT,
} from '../actions/comics';

const initialState = {
  comics: [],
  isSpotlightVisible: false,
  comicsLoaded: false,
  spotlight: {},
};

const comics = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case GET_COMICS:
      return {
        ...state,
        comics: data,
        comicsLoaded: true,
      };
    case ERROR:
      return state;
    case OPEN_SPOTLIGHT:
      return {
        ...state,
        spotlight: data,
        isSpotlightVisible: true,
      };
    case CLOSE_SPOTLIGHT:
      return {
        ...state,
        spotlight: {},
        isSpotlightVisible: false,
      };
    default:
      return state;
  }
};

export default comics;
