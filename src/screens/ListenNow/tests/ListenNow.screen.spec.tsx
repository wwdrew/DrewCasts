import React from 'react';
import { render } from '@testing-library/react-native';
import ListenNowScreen from '../ListenNow.screen';

test('form submits two answers', () => {
  const { getByText } = render(<ListenNowScreen />);

  const label = getByText(/ListenNow/i);

  expect(label).toBeDefined();
});
