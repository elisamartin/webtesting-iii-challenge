// Test away
import React from 'react';
import * as rt from 'react-testing-library';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
	it('Dashboard renders', () => {
		rt.render(<Dashboard />);
	});
});
