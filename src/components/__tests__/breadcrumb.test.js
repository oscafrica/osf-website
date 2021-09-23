import React from "react";
import { mount } from "enzyme";

import Breadcrumb from "../breadcrumb";

let wrapper;

describe("breadcrumb component", () => {
  beforeAll(() => {
    wrapper = mount(<Breadcrumb name="test-name" />);
  });

  it("should have image tag with src attribute", () => {
    expect(wrapper.html()).to.contain("img");
    expect(wrapper.find("img")).to.have.attr("src").not.equal("");
  });

  it("should have text 'test-name'", () => {
    expect(wrapper.find("section div h1")).to.contain.text("test-name");
  });
});
