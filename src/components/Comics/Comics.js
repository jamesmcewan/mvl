import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'
import Comic from './Comic'

const Comics = ({ comics, isLoading, weekId }) => {
  if (isLoading) {
    return <Loading />
  }

  const currWeek = weekId.replace('week', '')

  return (
    <>
      <Helmet>
        <title>{`Comic releases for ${currWeek} week`}</title>
      </Helmet>
      <h1 class="text-yellow-100 text-2xl">{`Comic releases for ${currWeek} week`}</h1>
      <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        {comics?.map((comic) => (
          <Comic {...comic} key={comic.id} />
        ))}
      </section>
    </>
  )
}

export default Comics
