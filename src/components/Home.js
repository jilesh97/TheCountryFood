import React, { Component } from 'react'
import { getList, getmenuList } from './ListFunctions'

class Home extends Component {

	constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
			items: [],
			dish: []
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
        getList().then(data => {
            this.setState(
                {
                    term: '',
                    items: [...data],
                },
                () => {
                    console.log(this.state.term)
                }
            )
		}),
		getmenuList().then(data => {
            this.setState(
                {
                    term: '',
                    dish: [...data],
                },
                () => {
                    console.log(this.state.dish)
                }
            )
		})
	}
	
	render(){
    return (
        <div id="page-content" style={{position : 'relative'}}>
            <div className="master-slider ms-skin-black-2 round-skin" id="masterslider" style={{visibility: 'visible', opacity: '1'}}>
                <div className="ms-slide">
                    <img src='js/masterslider/blank.gif' data-src={'img/content/home-slide-1.jpg'} alt="blog-image" />
                    <div className="ms-layer ms-caption">
                        <h1 className="text-right">
                            <span>Hungry?!</span>
  							<br />Good, we are here
							<br />to
							<span className="bold">serve</span>you
                        </h1>
					</div>
				</div>

                <div className="ms-slide">
                    <img src='js/masterslider/blank.gif' data-src={'img/content/home-slide-1.jpg'} alt="blog-image" />
                    <div className="ms-layer ms-caption">
                        <h1 className="text-right">
                            <span>Hungry?!</span>
  							<br />Good, we are here
							<br />to
							<span className="bold">serve</span>you
                        </h1>
					</div>
				</div>

                <div className="ms-slide">
                    <img src='js/masterslider/blank.gif' data-src={'img/content/home-slide-1.jpg'} alt="blog-image" />
                    <div className="ms-layer ms-caption">
                        <h1 className="text-right">
                            <span>Hungry?!</span>
  							<br />Good, we are here
							<br />to
							<span className="bold">serve</span>you
                        </h1>
					</div>
				</div>
            </div>

            <div className="category-boxes-icons">
				<div className=" container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-12 text-center">
							<div className="category-boxes-item">
								<figure>
									<img src="img/content/starter.png" alt="blog-image" />
									<h4>Starters</h4>
									<figcaption><a href="/home" className="btn btn-default-white">
                                        <i className="fa fa-file-text-o"></i> Read  More</a>
									</figcaption>
								</figure>
							</div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 text-center">
							<div className="category-boxes-item">
								<figure>
									<img src="img/content/main-dish.png" alt="blog-image" />
									<h4>Main Dishes</h4>
									<figcaption><a href="/menu" className="btn btn-default-white"><i className="fa fa-file-text-o"></i> Read  More</a>
									</figcaption>
								</figure>
							</div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 text-center">
							<div className="category-boxes-item">
								<figure>
									<img src="img/content/desserts.png" alt="blog-image" />
									<h4>Desserts</h4>
									<figcaption> <a href="/menu" className="btn btn-default-white"><i className="fa fa-file-text-o"></i> Read  More</a>
									</figcaption>
								</figure>
							</div>
						</div>

						<div className="col-md-3 col-sm-6 col-xs-12 text-center">
							<div className="category-boxes-item">
								<figure>
									<img className="img-responsive" src="img/content/drinks.png" alt="blog-image" />
									<h4>Drinks</h4>
									<figcaption> <a href="/menu" className="btn btn-default-white"><i className="fa fa-file-text-o"></i> Read  More</a>
									</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</div>

            <div className="latest-from-blog text-center">
				<div className="container">
					<h4>Latest Dishes</h4>
					<div className="row">
					{this.state.dish.map((dishes, di) => (
                          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" key={di}>
							<div className="blog-latest">
								<div className="row">
									<div className="col-md-6 col-sm-12">
										<img className="" src="img/content/blog-post-1.png" alt="blog-image" />
									</div>
									<div className="col-md-6 col-sm-12">
										<h5><a href="/menu">{dishes[0]}</a>
										</h5>
										{/* <p><i className="fa fa-clock-o"></i>
											<span className="date">27.6.2014</span>at
											<span className="time">17.33</span>
										</p> */}
										<p className="bl-sort"><b>discription: </b>{dishes[2]}</p>
										<p className="bl-sort"><b>Ingredients: </b>{dishes[3]}</p>
										<a href={'/detailmenu/' + dishes[1]} className="btn btn-default-red"><i className="fa fa-file-text-o"></i> Read  More</a>
									</div>
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
			</div>
            <br />

			<div className="chef-welcome">
				<div className="container">
					<h1>Welcome</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin nibh augue, suscipit a, 
						scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. 
						Phasellus pharetra nulla ac diam.</p>
					<a href="chef" className="btn btn-default-red"><i className="fa fa-file-text-o"></i> Read  More</a>
				</div>
			</div>

			<div id="sm-slide-section">
				<div className="container">
					<div className="slide-heading text-center"><h4>Our Clients Say</h4></div>
					<div id="slide-content" className="owl-carousel">
					<div className="item">
						<img src="img/content/sm-slide-img1.png" alt="img-1" />
						<div className="details">
							<h5><a href=''>test</a></h5>
							<ul className="list-inline">
								<li><a href=""><i className="fa fa-star"></i></a></li>
								<li><a href=""><i className="fa fa-star"></i></a></li>
								<li><a href=""><i className="fa fa-star"></i></a></li>
								<li><a href=""><i className="fa fa-star"></i></a></li>
								<li><a href=""><i className="fa fa-star"></i></a></li>
							</ul>
							<p>this</p>
						</div>
                    </div>
					
					{this.state.items.map((item, index) => (
                        <div className="item" key={index}>
                            <img src="img/content/sm-slide-img1.png" alt="img-1" />
                            <div className="details">
                                <h5><a href=''>{item[0]}</a></h5>
                                <ul className="list-inline">
                                    <li><a href=""><i className="fa fa-star"></i></a></li>
                                    <li><a href=""><i className="fa fa-star"></i></a></li>
                                    <li><a href=""><i className="fa fa-star"></i></a></li>
                                    <li><a href=""><i className="fa fa-star"></i></a></li>
                                    <li><a href=""><i className="fa fa-star"></i></a></li>
                                </ul>
                                <p>{item[2]}</p>
                            </div>
                        </div>
                    ))}                            
					</div>
				</div>
			</div>
        </div>
	)
	}
}

export default Home