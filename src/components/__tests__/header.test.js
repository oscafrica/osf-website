import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../header';

test('Displays the correct title', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.html()).to.contain('img');
});
