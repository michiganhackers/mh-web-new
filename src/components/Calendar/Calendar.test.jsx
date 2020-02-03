import Calendar, { calendarFetch } from './Calendar'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

it('fetches correctly', () => {
	return expect(calendarFetch()).resolves.not.toThrow();
})

it('renders without crashing', () => {
	const calendar = mount(<Calendar />);
});
