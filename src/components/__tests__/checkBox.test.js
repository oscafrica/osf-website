import React, { Component } from "react";
import renderer from "react-test-renderer";

import CheckBox from "../checkBox";

class CheckBoxWrapper extends Component {
  state = {
    isChecked: false
  };
  render() {
    const checked = this.state.isChecked;
    return <CheckBox disabled={false} checked={checked} onChange={() => this.setState({ isChecked: true })} />;
  }
}

describe("checkBox component", () => {
  const wrapper = renderer.create(<CheckBoxWrapper />);

  it("should have 'state' 'isChecked' equals false", () => {
    expect(wrapper.getInstance().state.isChecked).toBe(false);
  });

  it("should change state 'isChecked' with 'change' action", () => {
    wrapper.root.findByType("input").props.onChange();
    expect(wrapper.getInstance().state.isChecked).toBe(true);
  });
});
