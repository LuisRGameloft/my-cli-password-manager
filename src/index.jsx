import React from 'react';
import importJsx from 'import-jsx';
import { render } from 'ink';
import meow from 'meow';
import App from './app';

const cli = meow(`
	Usage
	  $ my-cli-password-manager

	Options
		--db  database file

	Examples
	  $ my-cli-password-manager --db=<file_name>
`);

render(React.createElement(App, cli.flags));



/*import React, {Component} from 'react';
import {render, Color} from 'ink';

class Counter extends Component {
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

render(<Counter />);*/