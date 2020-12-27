// import PropTypes from 'prop-types';
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'
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
      <h1>{`Comic releases for ${weekRm(weekId)} week`}</h1>
      <section class="grid grid-cols-3">
        {comics && comics.map(ComicsItem)}
      </section>
    </>
  )
}

export default Comics
