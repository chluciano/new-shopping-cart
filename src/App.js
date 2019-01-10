import React, { Component } from 'react';
import ProductsContainer from './components/ProductsContainer';
import FilterContainer from './components/FilterContainer';
import './App.css';
import productJson from './static/data/products';


class App extends Component {

  render() {
    let productList = productJson.products;
    return (
      <div className="appContainer"> 
        <FilterContainer/>
        <ProductsContainer products={productList} />
      </div>
    );
  }
}

export default App;
