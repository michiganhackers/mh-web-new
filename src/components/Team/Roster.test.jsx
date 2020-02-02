import Roster from './Roster'
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Roster />);
});
