import { useState, useEffect } from 'react'
import getComics from '../../helpers/getComics'
import Loading from '../Loading/Loading'
import Comic from './Comic'

const Comics = () => {
  const [isError, setIsError] = useState(false)
  const [comics, setComics] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const comicsData = sessionStorage.getItem(`comics`)

    if (comicsData) {
      setComics(JSON.parse(comicsData))
      setIsLoading(false)
      return
    }

    getComics().then(
      (comics) => {
        sessionStorage.setItem(`comics`, JSON.stringify(comics))
        setComics(comics)
        setIsLoading(false)
      },
      (error) => {
        setIsError(true)
        setIsLoading(false)
      }
    )
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && isError && <div>something went wrong</div>}
      {!isLoading && !isError && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
          {comics?.map((comic) => (
            <Comic {...comic} key={comic.id} />
          ))}
        </section>
      )}
    </>
  )
}

export default Comics
