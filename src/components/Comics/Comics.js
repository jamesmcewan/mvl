import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import getComics from '../../functions/getComics'
import Loading from '../Loading/Loading'
import Comic from './Comic'

const Comics = ({ weekId }) => {
  const currWeek = weekId.replace('week', '')
  const [comics, setComics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const comicsData = localStorage.getItem(`comics`)

    if (comicsData) {
      setComics(JSON.parse(comicsData))
      setIsLoading(false)
      return
    }

    getComics().then((comics) => {
      localStorage.setItem(`comics`, JSON.stringify(comics))
      setComics(comics)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <h1 className="text-yellow-100 text-2xl">
            {`Comic releases for ${currWeek} week`}
          </h1>
          <Helmet>
            <title>{`Comic releases for ${currWeek} week`}</title>
          </Helmet>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
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
