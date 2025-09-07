import { render } from '@testing-library/react';
import D3Chart from './D3Chart';

test('it renders a circle', () => {
    const { container } = render(<D3Chart />);
    const circle = container.querySelector('circle');
    
    expect(circle).toBeInTheDocument();
    expect(circle.tagName).toBe('circle');
});
