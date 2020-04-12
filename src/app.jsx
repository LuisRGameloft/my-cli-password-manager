import React from 'react';
import PropTypes from 'prop-types';
import { Main } from './components/main'

const App = ({ db }) => (
	<Main />
);

App.propTypes = {
	db: PropTypes.string
};

App.defaultProps = {
	db: 'Database testing'
};

module.exports = App;
