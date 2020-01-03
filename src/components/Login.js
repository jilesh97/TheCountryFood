import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/profile`)
      }
    })
  }

  render() {
    return (
        <div className="page-content">
        <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="send-message">
                <h4>Login</h4>
                <form id="login_frm" noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div id="session_value"></div>
                    <div className="col-md-12">
                      <input 
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required />
                    </div>
                    <div className="col-md-12">
                      <input 
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required />
                    </div>
                  </div>
                  <button><i className="fa fa-paper-plane-o"></i>Login</button>
                </form>
              </div>
            </div>
             <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Login
