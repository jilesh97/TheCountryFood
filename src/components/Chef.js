import React, { Component } from 'react'
import { cheflist } from './ListFunctions'

class Chef extends Component {  
  constructor() {
      super()
      this.state = {
          id: '',
          term: '',
          editDisabled: false,
          items: []
      }
  }

componentDidMount () {
    this.getAll()
}

onChange = event => {
    this.setState({
        term: event.target.value,
        editDisabled: 'disabled'
    })
}

getAll = () => {
  cheflist().then(data => {
        this.setState(
            {
                term: '',
                items: [...data]
            },
            () => {
                console.log(this.state.term)
            }
        )
    })
}

  render(){

  
    return (

        <div className="page-content">
      <div className="heading">
        <h1>The Chef</h1>
      </div>
      <div className="chef-details">
        <div className="container">
          

        {this.state.items.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-md-8">
                <div className="chef-img"><img src="img/content/chef-img.jpg" alt="" /></div>
                <h4>{item[0]} {item[2]} - Master Chef</h4>
                <div className="chef-description">
                  <p>Few lines about me:</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis,turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.</p>
                </div>
              </div>
            </div>
        ))}

        </div>
      </div>  
    </div>

    )
  }
}

export default Chef
