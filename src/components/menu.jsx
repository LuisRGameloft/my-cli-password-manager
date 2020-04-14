import React, { Component } from 'react';
import { Color } from 'ink';
import SelectInput from 'ink-select-input';

export class Menu extends Component {
	constructor() {
		super();
		this.state = {
			selection: 0
		};
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(item) {
		if(item.value == 3) {
			process.exit(0);
		}
		this.setState({ 
			selection: item.value 
		});
	}

	render() {
		switch(this.state.selection) {
			// Render main menu
			case 0: {
				const items = [
					{ 
						label : 'Open Database' ,
						value : 1
					}, 
					{
						label : 'Create a new Database',
						value : 2
					},
					{
						label : 'Exit',
						value : 3
					}
				];
				return (
					<SelectInput items={items} onSelect={this.handleSelect}/>
				);
			}
			case 1: {
				return (
					<Color green> Othercomponent </Color>
				);
			}
		}
	}

	componentDidMount() {
		console.log("[MENU] Mounted");
	}

	componentWillUnmount() {
		console.log("[MENU] unMounted");
	}
}