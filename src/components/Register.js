import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      contact: '',
      usertype: '',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      usertype:this.state.usertype
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
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
                <h4>Sign Up</h4>
                <form className="form-inline" id="" noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <input 
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter your First Name"
                      value={this.state.first_name}
                      onChange={this.onChange}
                      required />
                    </div>
                      <div className="col-md-12">
                      <input 
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter your Last Name"
                      value={this.state.last_name}
                      onChange={this.onChange} />
                    </div>
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
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.onChange}
                      required />
                    </div>
                    <div className="col-md-12">
                      <input 
                      type="text"
                      className="form-control"
                      name="contact"
                      placeholder="Enter Contact Number"
                      value={this.state.contact}
                      onChange={this.onChange}
                      required />
                    </div>
                    <div className="col-md-12">
                      <select name="usertype" id="typeinput" value={this.state.type} onChange={this.onChange}>
                          <option value="1">User</option>
                          <option value="2">Chef</option>
                      </select>
                    </div>
                  </div>
                  <button><i className="fa fa-paper-plane-o"></i>Sign Up</button>
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

export default Register
