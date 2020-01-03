import React, { Component } from 'react'
import { contactus } from './UserFunctions'

class Contactus extends Component {

  constructor() {
    super()
    this.state = {
      first_name: '',
      email: '',
      comment: '',
      contact: '',
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
      email: this.state.email,
      comment: this.state.comment,
      contact: this.state.contact,
    }

    contactus(newUser).then(res => {
      this.props.history.push(`/contactus`)
    })
  }

  render(){
    return (
      <div className="page-content">
      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-details">
                <h4>Contact Details</h4>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <h5>Kamp Lintfort</h5>
                    <div className="address clearfix">
                      <p><i className="fa fa-map-marker"></i>
                      </p>
                      <p>Viale della Moschea,85<br />00197 Ka-Li<br />Germany</p>
                    </div>
                    <div className="time-to-open clearfix">
                      <p><i className="fa fa-clock-o"></i>
                      </p>
                      <p>
                        <strong>Monday - Friday:</strong>9am - 11pm<br />
                        <strong>Saturday:</strong>10am - till last customer<br />
                        <strong>Sunday:</strong>10am - till last customer</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h5>Duisburg</h5>
                    <div className="address clearfix">
                      <p><i className="fa fa-map-marker"></i>
                      </p>
                      <p>Viale della Moschea, 85<br />00197 Duisburg<br />Germany</p>
                    </div>
                    <div className="time-to-open clearfix">
                      <p><i className="fa fa-clock-o"></i></p>
                      <p>
                        <strong>Monday - Friday:</strong>9am - 11pm<br />
                        <strong>Saturday:</strong>10am - till last customer<br />
                        <strong>Sunday:</strong>10am - till last customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="send-message">
                <h4>Send Us a Message</h4>
                <form id="contact_frm" className="form-inline" noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <input type="text" name="first_name" id="firstnameinput" placeholder="Name*"
                      value={this.state.first_name}
                      onChange={this.onChange}
                      required />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input type="email" name="email" id="emailinput" placeholder="Email*" 
                      value={this.state.email}
                      onChange={this.onChange}
                      required />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input type="text" name="contact" id="contactinput" placeholder="Phone" 
                      value={this.state.contact}
                      onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <textarea placeholder="Your message" name="comment" id="commentinput" value={this.state.comment}
                      onChange={this.onChange}></textarea>
                  <button><i className="fa fa-paper-plane-o"></i> Submit Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Contactus
