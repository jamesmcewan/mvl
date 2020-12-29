import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import Page from '../Page/Page'

const Layout = ({ weekId }) => (
  <div data-selector="wrapper">
    <Logo />
    <Nav />
    <Page weekId={weekId} />
    <Footer />
  </div>
)

export default Layout
