import { render, screen } from '@testing-library/react';
import Footer from './Footer.js';

describe('footer component', () => {
  test('testing if theres a 2022 text in the footer', () => {
    render(<Footer />);
    const footerText = screen.getByText('2022');
    expect(footerText).toBeInTheDocument;
  });
});

describe('Footer tests', () => {
    test('Renders Footer component', () => {
      const tree = render(<Footer />)
      expect(tree).toMatchSnapshot();
    });
});