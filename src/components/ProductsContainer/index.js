import React, {Component} from 'react';
import Product from './Product';

export default class ProductsContainer extends Component {
	render(){
		return(
			<div className="productsContainer">
				{this.props.products.map(product => (
					<Product 
						src={require("../../static/products/" + product.sku + "_1.jpg")} 
				        title={product.title}
				        price={product.price}
				    />
				))}
			</div>
		)
	}
}