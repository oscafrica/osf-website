import React from "react";
import { mount } from "enzyme";

import Cta from "../cta";

let wrapper;

describe("cta component", () => {
  beforeAll(() => {
    wrapper = mount(<Cta />);
  });

  it("should have 4 items", () => {
    expect(wrapper.find("section div")).to.have.exactly(4).descendants("div span");
  });

  it("should contain texts '800' and 'Attendees'", () => {
    expect(wrapper.text()).to.contain("Attendees");
    expect(wrapper.text()).to.contain("800");
  });
});
