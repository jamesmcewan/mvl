import Nav from '++components/Nav'
import Comics from '++components/Comics'
import Footer from '++components/Footer'
import PageProps from '++types/PageProps'

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
