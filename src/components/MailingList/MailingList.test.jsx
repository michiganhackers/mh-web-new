import React from "react";
import MailingList from "./MailingList";
import { mount } from "enzyme";
import { healthFetch } from "./MailingListFetch";

// gives the backend time to spin up in case it has been sleeping.
const MH_BACKEND_TIMEOUT_TIME = 15000;

it(
    "renders without crashing",
    () => {
        mount(<MailingList />);
    },
    MH_BACKEND_TIMEOUT_TIME
);

// TODO: better unit testing here and pretty much everywhere else.
it.skip(
    "can talk to the backend",
    () => {
        return expect(healthFetch()).resolves.not.toThrow();
    },
    MH_BACKEND_TIMEOUT_TIME
);
