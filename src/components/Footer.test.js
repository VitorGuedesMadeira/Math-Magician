/* eslint-disable no-unused-expressions */

import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer tests', () => {
  test('Renders Footer component', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
