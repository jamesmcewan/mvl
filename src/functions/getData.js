import Axios from 'axios'

function currentURL(currentPlatform, weekId) {
  if (!currentPlatform) {
    return `/api/${weekId.toLowerCase()}`
  }

  return `${currentPlatform}/comics?week=${weekId || 'thisWeek'}`
}

const getComicsData = async (weekId) => {
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

const getData = async () => {
  try {
    const thisweek = await getComicsData('thisWeek')
    const lastweek = await getComicsData('lastWeek')
    const nextweek = await getComicsData('nextWeek')

    return { thisweek, lastweek, nextweek }
  } catch (err) {
    throw new Error(err)
  }
}

export default getData
