import Logo from '../Logo/Logo'
import Comics from '../Comics/Comics'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = ({ weekId }) => (
  <div data-selector="wrapper">
    <Logo />
    <Nav />
    <Comics weekId={weekId} />
    <Footer />
  </div>
)

export default Layout
