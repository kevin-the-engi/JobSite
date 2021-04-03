import React from 'react';
import { shallow } from 'enzyme';
import Location from '../components/Location.jsx';

describe('Location', () => {
  const wrapper = shallow(<Location />);
  const expected = {
    target: {
      name: 'location',
      value: 'San Francisco',
    },
  };

  it('should detect onChange', () => {
    wrapper.find('#location').simulate('change', expected);
  });

  it('should correctly update state with onChange value', () => {
    wrapper.find('#location').simulate('change', expected);

    expect(wrapper.state().location).toBe('San Francisco');
    expect(wrapper.state().location.length).toEqual('San Francisco'.length);
  });
});
