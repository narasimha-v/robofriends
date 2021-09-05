import React, { Component } from 'react';

export class Scroll extends Component {
	render() {
		return (
			<div style={{ overflow: 'scroll', height: '100vh' }}>
				{this.props.children}
			</div>
		);
	}
}
