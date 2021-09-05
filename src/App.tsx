import React, { Component } from 'react';
import 'tachyons';
import { CardList, Scroll, SearchBox } from './components';
import { Robot } from './types';

interface AppState {
	robots: Robot[];
	searchField: string;
}

interface AppProps {}

export class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const data: Robot[] = await response.json();
		data.forEach(
			(r) => (r.image = `https://robohash.org/${Math.random()}?200*200`)
		);
		this.setState({ robots: data });
	}

	onSeachChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((r) =>
			r.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		);

		return (
			<div className='tc'>
				<h1 className='f1'>ROBO FRIENDS</h1>
				<SearchBox
					searchChange={this.onSeachChange}
					searchField={this.state.searchField}
				/>

				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
