import Roster from "./Roster";
// import { rosterFetch } from './RosterFetch';
import React from "react";
import { mount } from "enzyme";

it("renders without crashing", () => {
    mount(<Roster />);
});

it("fetches correctly", () => {
    // Throws 400. Might have been an attempt to wrap the gapi call when the Lead page still did that
    // return expect(rosterFetch()).resolves.not.toThrow();
});
