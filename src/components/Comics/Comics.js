// import PropTypes from 'prop-types';
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'
import ComicsWeekTitle from './ComicsWeekTitle'
import ComicsSection from './ComicsSection'
import ComicsItem from './ComicsItem'

const weekRm = (weekId) => weekId.replace('week', '')

const Comics = ({ comics, isLoading, weekId }) => {
  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Helmet>
        <title>{`Comic releases for ${weekRm(weekId)} week`}</title>
      </Helmet>
      <ComicsWeekTitle>
        {`Comic releases for ${weekRm(weekId)} week`}
      </ComicsWeekTitle>
      <ComicsSection>{comics && comics.map(ComicsItem)}</ComicsSection>
    </>
  )
}

export default Comics
