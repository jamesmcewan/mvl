import Nav from '@components/Nav/Nav'
import Comics from '@components/Comics/Comics'
import Footer from '@components/Footer/Footer'
import PageProps from '../../types/PageProps'

const Page = ({ week, comics }: PageProps) => {
  return (
    <div>
      <Nav week={week} />
      <Comics comics={comics} />
      <Footer />
    </div>
  )
}

export default Page
