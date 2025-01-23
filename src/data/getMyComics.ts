import getUrl from '../functions/getUrl'

async function getMyComics(week: string) {
  const url = getUrl(week)
  try {
    const response = await fetch(`${url}`, {
      signal: AbortSignal.timeout(5000),
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    const { attributionText } = data
    const { results } = data.data
    const regular = results.filter(
      (comic) => comic.variantDescription === '' && comic.format === 'Comic',
    )
    return { comics: regular, attributionText }
  } catch (e) {
    console.log('oh no', e)
    return {}
  }
}

export default getMyComics
