import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Nav from './componenets/Nav'
import About from './views/About'
import FeaturedWork from './views/FeaturedWork'
import Gallery from './views/Gallery'
import Contact from './views/Contact'
import Footer from './componenets/Footer'
import './App.css'

function App () {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/Featured-Work' component={FeaturedWork} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Contact' component={Contact} />
        <Redirect from='*' to='/' />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
