import React, {Component} from 'react';
import { Color, Text } from 'ink';
import SelectInput from 'ink-select-input';
import Box from 'ink-box';

export class Menu extends Component {
	constructor() {
		super();
	}

	handleSelect(item) {
		console.log(item);
	}

	render() {
		const items = [
			{ 
				label : 'Open Database' ,
				value : 0
			}, 
			{
				label : 'Create a new Database',
				value : 1
			},
			{
				label : 'Exit',
				value : 2
			}
		];
		return (
			<SelectInput items={items} onSelect={this.handleSelect}/>
		);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}
}