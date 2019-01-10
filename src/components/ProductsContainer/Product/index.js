import React, {Component} from 'react';

export default class Product extends Component {
	render(){
		return(
			<div className="productContainer">
				<img src={this.props.src} className="productImage" />
				<h4> {this.props.title} </h4>
				<h3> {this.props.price} </h3>
				<button className="addToCartButton"> Add to Cart</button>
			</div>
		);
	}
}