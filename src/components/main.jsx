import React, {Component} from 'react';
import { Color } from 'ink';

export class Main extends Component {
	constructor() {
		super();
		this.state = {
			i: 0
		};
	}

	render() {
		return <Color green>{this.state.i} {this.props.database} passed</Color>;
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