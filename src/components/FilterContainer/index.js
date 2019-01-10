import React, {Component} from 'react';
import FilterButton from './FilterButton';

export default class FilterContainer extends Component {
	render(){
		const filterLabels = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
		return(
			<div className="filterContainer">
				<h4 class="title"> Sizes: </h4>
				<div className="filterButtons">
					{filterLabels.map(filterLabel => (
						<FilterButton label={filterLabel} />
					))}
				</div>
			</div>
		);
	}
}