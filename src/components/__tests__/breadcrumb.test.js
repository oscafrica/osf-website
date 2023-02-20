import React from "react";
import renderer from "react-test-renderer";

import Breadcrumb from "../2022/breadcrumb";

let wrapper;

describe("breadcrumb component", () => {
  beforeAll(() => {
    wrapper = renderer.create(<Breadcrumb name="test-name" />);
  });

  it("should have image tag with src attribute", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should have text 'test-name'", () => {
    expect(wrapper.root.findByType("h1").children).toContain("test-name");
  });
});
