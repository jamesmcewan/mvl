function getData(setComics, setIsLoading) {
  const data = localStorage.getItem('comics')
  if (data) {
    setComics(data)
    setIsLoading(false)
    return
  }
}

export default getData
