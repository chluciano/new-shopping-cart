import React, {Component} from 'react';

export default class FilterButton extends Component {
	render(){
		return(
			<div className="filtersAvailableSize">
				<button className="filterButton"> {this.props.label} </button>
			</div>
		);
	}
}