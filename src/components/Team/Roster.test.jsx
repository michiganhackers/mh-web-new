import Roster from './Roster'
import React from 'react';
import { mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Roster />);
});
