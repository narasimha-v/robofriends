import React, { Component } from 'react';
import { Robot } from '../types';

export class Card extends Component<{ robot: Robot }> {
	render() {
		const { name, username, email, image } = this.props.robot;
		return (
			<div className='bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
				<img src={image} alt={username} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
	}
}
