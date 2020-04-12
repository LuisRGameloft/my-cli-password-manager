import React from 'react';
import PropTypes from 'prop-types';
import {Text, Color} from 'ink';

const App = ({ db }) => (
	<Text>
		Hello Whiso, <Color green>{db}</Color>
	</Text>
);

App.propTypes = {
	db: PropTypes.string
};

App.defaultProps = {
	db: 'Database testing'
};

module.exports = App;
