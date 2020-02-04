import Roster, { rosterFetch } from './Roster'
import React from 'react';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Roster />);
});

it('fetches correctly', () => {
	return expect(rosterFetch()).resolves.not.toThrow();
})
