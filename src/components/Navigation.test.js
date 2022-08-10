import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navigation';

describe('Navbar tests', () => {
  test('Renders Navbar component', () => {
    const tree = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
