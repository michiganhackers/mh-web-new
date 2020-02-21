import Roster from './Roster';
import { rosterFetch } from './RosterFetch';
import React from 'react';
import { mount } from 'enzyme';

it('renders without crashing', () => {
    mount(<Roster />);
});

it('fetches correctly', () => {
    return expect(rosterFetch()).resolves.not.toThrow();
});
