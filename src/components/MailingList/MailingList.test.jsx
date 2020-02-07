import React from 'react';
import MailingList from './MailingList';
import { mount } from 'enzyme';
import { healthFetch } from './MailingListFetch';

it('renders without crashing', () => {
    mount(<MailingList />);
});

// TODO: better unit testing here and pretty much everywhere else.
it('can talk to the backend', () => {
    return expect(healthFetch()).resolves.not.toThrow();
});
