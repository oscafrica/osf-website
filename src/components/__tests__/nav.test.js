import React from "react";
import renderer from "react-test-renderer";

import Nav from "../2022/nav";

let wrapper;

describe("header component", () => {
  beforeAll(() => {
    wrapper = renderer.create(<Nav />);
  });

  it("should have img", () => {
    expect(wrapper.root.findByType("img").props.src).toContain("cloudinary.com");
  });

  // it("should have 3 children", () => {
  //   expect(wrapper.root.findAllByType("section").length).toBe(3);
  // });

  it("nav should have 7 nav links", () => {
    expect(wrapper.root.findByType("nav").children.length).toBe(6);
  });

  it("nav should be able to toggle", () => {
    wrapper.root.findByType("button").props.onClick();
    expect(wrapper.root.findByType("nav").props.className).toContain("block");
  });
});
