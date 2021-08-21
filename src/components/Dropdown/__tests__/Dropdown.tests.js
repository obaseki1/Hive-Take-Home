import React from 'react';
import Dropdown from '../Dropdown';
import { render, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import values from '../../../constants/values';

const skills = ['test', 'test1', 'test2'];

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Dropdown values={values} selectedValues={skills} title="test"/>, div);
});

test('matches snapshot', () => {
  const div = document.createElement('div');
    const { getByTestId } = render(<Dropdown values={values} selectedValues={skills} title="Testing"/>, div);
    expect(getByTestId('dropdown-test')).toMatchSnapshot()
});
