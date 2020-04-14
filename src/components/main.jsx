import React, {Component} from 'react';
import { Color } from 'ink';
import { Menu } from './menu'

export class Main extends Component {
	constructor() {
		super();
	}

	render() {
		if(this.props.database === 'none') {
			return ( 
				<Menu /> 
			);
		}
		return <Color green>{this.state.i} {this.props.database} passed</Color>;
	}

	componentDidMount() {
	
	}

	componentWillUnmount() {
		
	}
}