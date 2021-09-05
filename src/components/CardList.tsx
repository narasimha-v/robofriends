import React, { Component } from 'react';
import { Card } from '.';
import { Robot } from '../types';

export class CardList extends Component<{ robots: Robot[] }> {
	render() {
		return (
			<div>
				{this.props.robots.map((robot) => (
					<Card key={robot.id} robot={robot} />
				))}
			</div>
		);
	}
}
