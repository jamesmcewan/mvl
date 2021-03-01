import { Helmet } from 'react-helmet'
import Comics from '../Comics/Comics'

const Page = ({ weekId }) => {
  const currWeek = weekId.replace('week', '')

  return (
    <>
      <h1 className="text-yellow-100 text-2xl">
        {`Comic releases for ${currWeek} week`}
      </h1>
      <Helmet>
        <title>{`Comic releases for ${currWeek} week`}</title>
      </Helmet>
      <Comics />
    </>
  )
}

export default Page
