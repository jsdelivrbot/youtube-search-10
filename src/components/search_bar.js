import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' }
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					placeholder="Szukaj"
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;