// import PropTypes from 'prop-types';
import Comic from '../Comic/Comic';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

const ComicsSection = ({ theme, children }) => <section>{children}</section>;

const WeekTitle = ({ children }) => (
  <h1 class="flex justify-center items-center	m-0">{children}</h1>
);

const comicMap = (comic) => <Comic {...comic} key={comic.id} />;
const weekRm = (weekId) => weekId.replace('week', '');

const Comics = ({ comics, isLoading, weekId }) => {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>{`Comic releases for ${weekRm(weekId)} week`}</title>
      </Helmet>
      <WeekTitle>{`Comic releases for ${weekRm(weekId)} week`}</WeekTitle>
      <ComicsSection>{comics && comics.map(comicMap)}</ComicsSection>
    </>
  );
};
//
// Comics.propTypes = {
//   comics: PropTypes.array
// };

export { WeekTitle, ComicsSection, comicMap };
export default Comics;
