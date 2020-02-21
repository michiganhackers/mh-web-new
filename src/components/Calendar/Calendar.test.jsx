import Calendar from './Calendar';
import { calendarFetch } from './CalendarFetch';
import React from 'react';
import { mount } from 'enzyme';

it('fetches correctly', () => {
    return expect(calendarFetch()).resolves.not.toThrow();
});

it('renders without crashing', () => {
    mount(<Calendar />);
});
