import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Menu from './components/Menu'
import Chef from './components/Chef'
import Contactus from './components/Contactus'
import Home from './components/Home'
import Detailmenu from './components/Detailmenu'
import About from './components/About'
import Footer from './Footer'
import Header from './Header'


const Child = ({ match }) => console.log('match', match ) || ( <h3> ID</h3>)
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/chef" component={Chef}/>
            <Route exact path="/contactus" component={Contactus}/>
            <Route exact path="/detailmenu/:id" component={Detailmenu}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
