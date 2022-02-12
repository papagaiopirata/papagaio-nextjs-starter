import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Creating tests for Home', () => {
  it('Renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Hello World',
    });

    expect(heading).toBeInTheDocument();
  });

  it('Should in snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
