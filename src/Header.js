import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { withRouter } from 'react-router-dom'

class Header extends Component {

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/home`)
      }
    
render(){

    const loginRegLink = (
        <ul className="navbar-nav">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
    )
  
    const userLink = (
        <ul>
            <li><a href="/profile">User</a></li>
           <li><a href="" onClick={this.logOut.bind(this)} >Logout</a></li>
        </ul>
    )

    return (
       <header id="header">
            <div className="header-nav-bar">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/home" style={{padding: "16pt", color: 'snow'}}>TheCountryFood</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/menu">Menu Card</a></li>
                                <li><a href="/chef">Chef</a></li>
                                <li><a href="/contactus">Contact us</a></li>
                                <li><a href="/Register">Sign Up</a></li>
                                <li><a href="/Login">Login</a></li>
                                {/* <li><a href="/profile">User</a></li> */}
                                {/* <li><a href="" onClick={this.logOut.bind(this)} >Logout</a></li> */}
                                {/* {localStorage.usertoken ? userLink : loginRegLink} */}
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
        </header>
    )
}
}

export default Header
