import getUrl from '../functions/getUrl'

async function getMyComics(week: string) {
  const url = getUrl(week)
  try {
    console.log(`get comics from ${URL}`)
    const response = await fetch(`${url}`)
    console.log(response)
    const data = await response.json()
    const { attributionText } = data
    const { results } = data.data
    const regular = results.filter(
      (comic) => comic.variantDescription === '' && comic.format === 'Comic',
    )
    return { comics: regular, attributionText }
  } catch (e) {
    console.log('oh no', e)
  }
}

export default getMyComics
