import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      contact: newUser.contact,
      usertype: newUser.usertype
    })
    .then(response => {
      console.log('Registered')
    })
}

export const contactus = newUser => {
  return axios
    .post('users/contactus', {
      first_name: newUser.first_name,
      comment: newUser.comment,
      email: newUser.email,
      contact: newUser.contact
    })
    .then(response => {
      console.log('Done')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const orderdish = newUser => {
  return axios
    .post('users/orderdish', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      contact: newUser.contact,
      usertype: newUser.usertype
    })
    .then(response => {
      console.log('Order Placed')
    })
}