import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Loading from '../Loading/Loading'
import Comic from './Comic'

const Comics = ({ weekId }) => {
  const currWeek = weekId.replace('week', '')
  const [comics, setComics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //check local storage for comics, if empty get comics
    //return data and loading false
    setIsLoading(true)
    setComics([])
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <h1 class="text-yellow-100 text-2xl">
            {`Comic releases for ${currWeek} week`}
          </h1>
          <Helmet>
            <title>{`Comic releases for ${currWeek} week`}</title>
          </Helmet>
          <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
            {comics?.map((comic) => (
              <Comic {...comic} key={comic.id} />
            ))}
          </section>
        </>
      )}
    </>
  )
}

export default Comics
