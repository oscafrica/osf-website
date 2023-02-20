import React from "react";
import renderer from "react-test-renderer";

import Cta from "../2022/cta";

let wrapper;

describe("cta component", () => {
  beforeAll(() => {
    wrapper = renderer.create(<Cta />);
  });

  it("should have 4 items", () => {
    expect(wrapper.root.findByType("section").findByType("div").children.length).toBe(4);
  });

  it("should contain texts '800' and 'Attendees'", () => {
    expect(wrapper.root.findAllByType("p").some((node) => node.children.includes("Attendees"))).toBe(true);
    expect(wrapper.root.findAllByType("span").some((node) => node.children.includes("800+"))).toBe(true);
  });
});
