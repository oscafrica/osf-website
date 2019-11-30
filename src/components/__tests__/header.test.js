import React from 'react';
import { mount } from 'enzyme';

import Header from '../header';

let wrapper;

beforeAll(() => {
  wrapper = mount(<Header />);
});

describe('header component', () => {
  it('should have img', () => {
    expect(wrapper.html()).to.contain('img');
  });

  it('nav should have 3 children', () => {
    expect(wrapper.find('nav'))
      .to.have.exactly(3)
      .descendants('a');
  });
});
