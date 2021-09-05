import React, { Component } from 'react';

interface SearchBoxProps {
	searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	searchField: string;
}

export class SearchBox extends Component<SearchBoxProps> {
	render() {
		return (
			<div className='pa2'>
				<input
					type='search'
					placeholder='Search Robots'
					className='pa3 ba b--green bg-lightest-blue'
					onChange={this.props.searchChange}
					value={this.props.searchField}
				/>
			</div>
		);
	}
}
