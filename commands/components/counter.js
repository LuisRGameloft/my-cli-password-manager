import React, {Component} from 'react';
import {render, Color} from 'ink';

export class Counter extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return <Color green>{this.state.i} tests passed</Color>;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}
