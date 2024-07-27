import getUrl from '../functions/getUrl'

async function getMyComics(week: string) {
  const url = getUrl(week)
  try {
    const response = await fetch(`${url}`, {
      signal: AbortSignal.timeout(5000),
    })
    console.log(response)
    const data = await response.json()
    const { attributionText } = data
    const { results } = data.data
    console.log(results)
    const regular = results.filter(
      (comic) => comic.variantDescription === '' && comic.format === 'Comic',
    )
    return { comics: regular, attributionText }
  } catch (e) {
    console.log('oh no', e)
  }
}

export default getMyComics
