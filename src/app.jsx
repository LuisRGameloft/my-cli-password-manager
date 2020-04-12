import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './components/main'

const App = ({ db }) => (
	<Main database={db} />
);

App.propTypes = {
	db: PropTypes.string
};

App.defaultProps = {
	db: 'none'
};

module.exports = App;
