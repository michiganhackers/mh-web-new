import Calendar from './Calendar'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Calendar />);
});
