import React, { Component } from "react";
import { mount } from "enzyme";

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
  const wrapper = mount(<CheckBoxWrapper />);

  it("should have 'state' 'isChecked' equals false", () => {
    expect(wrapper).to.have.state("isChecked", false);
  });

  it("should change state 'isChecked' with 'change' action", () => {
    wrapper.find("input").simulate("change");
    expect(wrapper).to.have.state("isChecked", true);
  });
});
