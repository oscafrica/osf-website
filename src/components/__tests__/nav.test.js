import React from "react";
import { mount } from "enzyme";

import Nav from "../nav";

let wrapper;

describe("header component", () => {
  beforeAll(() => {
    wrapper = mount(<Nav />);
  });

  it("should have img", () => {
    expect(wrapper.html()).to.contain("img");
  });

  it("should have 3 children", () => {
    expect(wrapper.find("section")).to.have.exactly(3);
  });

  it("nav should have 6 nav links", () => {
    expect(wrapper.find("nav"))
      .to.have.exactly(7)
      .descendants("a");
  });

  it("nav should be able to toggle", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("nav")).to.have.className("block");
  });
});
