import { Router } from '@reach/router'
import Layout from '../Layout/Layout'

const App = () => (
  <Router>
    <Layout path="/" weekId="thisweek" />
    <Layout path="/:weekId" />
  </Router>
)

export default App
