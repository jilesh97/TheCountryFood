import React, { Component } from 'react'
import { getmenuList, updateItem, addToList } from './ListFunctions'

class Menu extends Component {

  constructor() {
    super()
    this.state = {
        id: '',
        term: '',
        editDisabled: false,
        items: []
    }
    this.onSubmit = this.onSubmit.bind(this)
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
  getmenuList().then(data => {
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

onSubmit = e => {
  e.preventDefault()
  this.setState({ editDisabled: '' })
  addToList(this.state.term).then(() => {
      this.getAll()
  })
}

render(){
  return (
    
    <div className="container">
        
    <h1 className="text-center">Menu</h1>
    <ul className="nav nav-tabs" role="tablist">
      <li className="active"><a href="#tab-1" role="tab" data-toggle="tab">All</a></li>
      <li><a href="#tab-2" role="tab" data-toggle="tab">Daily Menu</a></li>
    </ul>
    <div className="tab-content">
          <div className="tab-pane fade in active" id="tab-1">
      <div className="all-menu-details">
        <h5>All Menu</h5>
          {this.state.items.map((item, index) => (

            <div className="item-list" key={index}>
            <div className="list-image">
              <img src="img/content/menu-list-img.jpg" alt="" />
            </div>
            <div className="all-details">
              <div className="visible-option">
                <div className="details">
                  <h6><a href="dish.html">{item[0]}</a>
                  </h6>
                  <p className="m-with-details"><strong>Description: </strong>{item[2]}</p><br />
                  <p className="m-with-details"><strong>Ingredients: </strong>{item[3]}</p>
                </div>

                <div className="price-option fl">
                  <h4 style={{borderBottomColor : 'white'}}>{item[4]} Euro</h4>
                </div>
              
                <div className="qty-cart text-center">
                    <br />
                    {/* <form onSubmit={this.onSubmit}>
                      <input type="hidden" name="first_name" value={this.state.first_name} onChange={this.onChange}/>                    
                        <button onClick={this.onSubmit.bind(this)} style={{"display":'contents'}}><a href="" className="btn btn-default-red">Order</a></button>
                    </form> */}
                    <a href="" className="btn btn-default-red">Order</a>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
    </div>
          <div className="tab-pane fade" id="tab-2">
            <div className="all-menu-details">
              <h5>Daily Menu</h5>
                {this.state.items.map((item, index) => (

                  <div className="item-list" key={index}>
                  <div className="list-image">
                    <img src="img/content/menu-list-img.jpg" alt="" />
                  </div>
                  <div className="all-details">
                    <div className="visible-option">
                      <div className="details">
                        <h6><a href="dish.html">{item[0]}</a>
                        </h6>
                        <p className="m-with-details"><strong>Description: </strong>{item[2]}</p><br />
                        <p className="m-with-details"><strong>Ingredients: </strong>{item[3]}</p>
                      </div>

                      <div className="price-option fl">
                        <h4 style={{borderBottomColor : 'white'}}>{item[4]} Euro</h4>
                      </div>
                    
                      <div className="qty-cart text-center">
                          <br />
                          <a href="" className="btn btn-default-red">Order</a>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
          </div>

    </div>
    {/* <div className="pagination">
    <ul className="list-inline  text-right">
      <li className="active"><a href="">1</a>
      </li>
      <li><a href="">2</a>
      </li>
      <li><a href="">3</a>
      </li>
      <li><a href="">4</a>
      </li>
      <li><a href="">5</a>
      </li>
      <li><a href="">6</a>
      </li>
    </ul>
    </div> */}
    </div>
  )
}
}

export default Menu