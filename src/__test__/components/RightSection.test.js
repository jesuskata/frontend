import React from 'react';
import { mount } from 'enzyme';
import { RightSection } from '../../components/RightSection';

describe('<RightSection />', () => {
  const about = mount(<RightSection />);

  test('RightSection render', () => {
    expect(about.length).toEqual(1);
  });

  // test('RightSection title', () => {
  //   expect(about.find('.RightSection-title').length).toEqual(1);
  // });

  // test('RightSection haves 3 items', () => {
  //   expect(about.find('.RightSection-item').length).toBeGreaterThan(2);
  // });

});
