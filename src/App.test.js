import App from "./App";
import React from "react";
import { mount } from "enzyme";

it("renders without crashing", () => {
  mount(<App />);
});
