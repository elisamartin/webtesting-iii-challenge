// Test away!
import React from 'react';
import * as rt from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect';

afterEach(rt.cleanup);

describe('Display component', () => {
	it('Display shows', () => {
		rt.render(<Display />);
	});

	it('shows gate closed and locked', () => {
		const display = rt.render(<Display locked={true} closed={true} />);
		display.getByText(/closed/i);
		display.getByText(/locked/i);
	});

	it('shows gate open and unlocked', () => {
		const display = rt.render(<Display locked={false} closed={false} />);
		display.getByText(/open/i);
		display.getByText(/unlocked/i);
	});

	it('green when open or unlocked', () => {
		const display = rt.render(<Display closed={false} locked={false} />);
		const unlockedGate = display.getByText(/unlocked/i);
		const openGate = display.getByText(/open/i);
		expect(unlockedGate).toHaveClass('green-led');
		expect(openGate).toHaveClass('green-led');
	});

	it('red when closed or locked', () => {
		const display = rt.render(<Display closed={true} locked={true} />);
		const lockedGate = display.getByText(/locked/i);
		const closedGate = display.getByText(/closed/i);
		expect(lockedGate).toHaveClass('red-led');
		expect(closedGate).toHaveClass('red-led');
	});
});
