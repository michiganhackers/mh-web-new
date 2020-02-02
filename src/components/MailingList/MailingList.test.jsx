import React from 'react';
import ReactDOM from 'react-dom';
import MailingList from './MailingList';
import { mount } from 'enzyme';
import { Get } from '../../utility/api';
import Url, { MH_BACKEND_URL } from '../../utility/url';

it('renders without crashing', () => {
    mount(<MailingList />);
});

it('can talk to the backend', () => {
    return expect(Get(new Url(MH_BACKEND_URL).path("v1").path("email").path("health"))).resolves.not.toThrow();
});
