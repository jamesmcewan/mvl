const getComics = state => state.comics;
const getThisWeeksComics = state => state.comics.ThisWeek;
const getNextWeeksComics = state => state.comics.nextWeek;
const getLastWeeksComics = state => state.comics.LastWeek;

export {
  getComics,
  getThisWeeksComics,
  getNextWeeksComics,
  getLastWeeksComics
};
