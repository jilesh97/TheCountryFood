import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getdishid } from './ListFunctions'

class Detailmenu extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: []
        }
        this.onChange = this.onChange.bind(this)
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
        console.log(this.props.match.params.id)
        getdishid(this.props.match.params.id).then(data => {
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
    <div className="container">
        <h1 className="text-center">Dish</h1>
            <div className="page-content">
                <div className="news-events-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blog-post no-dish-side">
                                    <div className="blog-post-img"><img class="" src="../img/content/dish-img1.jpg" alt="" /></div>
                                        <h4><a href="#">Shrimps - a good start</a></h4>
                                            <p><strong>Description:</strong>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est.</p>
                                            <p><strong>Ingredient:</strong>
                                                5 tiger shrimps, garlic, butter, lemon, herbs, 5 tiger shrimps, garlic, butter, lemon, herbs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
}

export default Detailmenu