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
