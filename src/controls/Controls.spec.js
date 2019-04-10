// Test away!
import React from 'react';
import * as rt from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect';

afterEach(rt.cleanup);

describe('Controls Component', () => {
	it('Controls renders', () => {
		rt.render(<Controls />);
	});

	it('render toggle buttons', () => {
		const controls = rt.render(<Controls closed={false} locked={false} />);
		controls.getByText(/lock gate/i);
		controls.getByText(/close gate/i);
	});

	it('lock disabled when gate open', () => {
		const controls = rt.render(<Controls closed={false} />);
		const toggleLockButton = controls.getByText(/lock gate/i);
		expect(toggleLockButton).toHaveAttribute('disabled');
	});

	it('open disabled when locked', () => {
		const controls = rt.render(<Controls closed={true} locked={true} />);
		const toggleLockButton = controls.getByText(/open gate/i);
		expect(toggleLockButton).toHaveAttribute('disabled');
	});

	it('cant close when already closed', () => {
		const controls = rt.render(<Controls closed={true} />);
		expect(controls.getByText(/open gate/i)).toBeTruthy();
	});
});
