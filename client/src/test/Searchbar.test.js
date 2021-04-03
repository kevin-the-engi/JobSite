import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from '../components/Searchbar.jsx';

describe('Searchbar', () => {
  const wrapper = shallow(<Searchbar />);
  const expected = {
    target: {
      name: 'search',
      value: 'engineer',
    },
  };

  it('should detect onChange', () => {
    wrapper.find('#search').simulate('change', expected);
  });

  it('should correctly update state with onChange value', () => {
    wrapper.find('#search').simulate('change', expected);

    expect(wrapper.state().search).toBe('engineer');
    expect(wrapper.state().search.length).toEqual(8);
  });
});
