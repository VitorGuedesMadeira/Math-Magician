import { render } from '@testing-library/react';
import Navbar from "./Navigation";
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar tests', () => {
    test('Renders Navbar component', () => {
      const tree = render(
      <Router>
        <Navbar />
      </Router>
      )
      expect(tree).toMatchSnapshot();
    });
});
