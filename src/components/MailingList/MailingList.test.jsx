import React from 'react';
import ReactDOM from 'react-dom';
import MailingList, { addEmailFetch } from './MailingList';
import { mount } from 'enzyme';
import { Get } from '../../utility/api';
import Url, { MH_BACKEND_URL } from '../../utility/url';

it('renders without crashing', () => {
    mount(<MailingList />);
});

// TODO: better unit testing here and pretty much everywhere else.
it('can talk to the backend', () => {
    return expect(Get(new Url(MH_BACKEND_URL).path("v1").path("email").path("health"))).resolves.not.toThrow();
});
