import Axios from 'axios'

function currentURL(currentPlatform, weekId) {
  if (!currentPlatform) {
    return `/api/${weekId.toLowerCase()}`
  }

  return `${currentPlatform}/comics?week=${weekId || 'thisWeek'}`
}

async function getComics(weekId) {
  try {
    const response = await Axios.get(
      currentURL(process.env.REACT_APP_CURRENT_PLATFORM, weekId)
    )

    const { results } = await response.data.data
    return results
  } catch (err) {
    throw new Error(err)
  }
}

export default getComics
