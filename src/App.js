import { HashRouter, BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Nav from './componenets/Nav'
import About from './views/About'
import FeaturedWork from './views/FeaturedWork'
import UpcomingWork from './views/UpcomingWork'
import Gallery from './views/Gallery'
import Contact from './views/Contact'
import Footer from './componenets/Footer'
import './App.css'

function App () {
  return (
    <HashRouter basename='/'>
      <Nav />
      <div style={{ paddingBottom: '10rem' }}>
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/Featured-Work' component={FeaturedWork} />
          <Route path='/Upcoming-Work' component={UpcomingWork} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Contact' component={Contact} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  )
}

export default App
