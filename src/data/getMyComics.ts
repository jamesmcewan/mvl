import getUrl from '../functions/getUrl'

async function getMyComics(week: string) {
  const url = getUrl(week)
  let response: Response | undefined

  try {
    console.log('Fetching Marvel API:', { url, week, timestamp: new Date().toISOString() })

    response = await fetch(`${url}`)

    if (!response.ok) {
      // Capture response details before throwing
      let errorBody = ''
      try {
        errorBody = await response.text()
      } catch (bodyError) {
        errorBody = 'Unable to read response body'
      }

      console.error('Marvel API HTTP Error:', {
        status: response.status,
        statusText: response.statusText,
        url: url,
        week: week,
        responseBody: errorBody,
        timestamp: new Date().toISOString(),
        headers: {
          'content-type': response.headers.get('content-type'),
          'x-ratelimit-limit': response.headers.get('x-ratelimit-limit'),
          'x-ratelimit-remaining': response.headers.get('x-ratelimit-remaining'),
        }
      })

      throw new Error(`Marvel API returned ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()

    const { attributionText } = data
    const { results } = data.data
    const regular = results.filter(
      (comic) => comic.variantDescription === '' && comic.format === 'Comic',
    )
    return { comics: regular, attributionText }
  } catch (e) {
    // Determine error type for better debugging
    const isNetworkError = e instanceof TypeError && e.message.includes('fetch')
    const isJsonError = e instanceof SyntaxError
    const isHttpError = response && !response.ok

    let errorType = 'Unknown Error'
    if (isNetworkError) {
      errorType = 'Network Error'
    } else if (isHttpError) {
      errorType = 'HTTP Error'
    } else if (isJsonError) {
      errorType = 'JSON Parse Error'
    }

    const errorDetails = {
      timestamp: new Date().toISOString(),
      errorType: errorType,
      url: url,
      week: week,
      statusCode: response?.status,
      errorMessage: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack : undefined
    }

    console.error('Marvel API Request Failed:', errorDetails)
    return {}
  }
}

export default getMyComics
