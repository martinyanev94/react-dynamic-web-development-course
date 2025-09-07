import { render, screen } from '@testing-library/react';
import PreviousValue from './PreviousValue';
import { act } from 'react-dom/test-utils';

test('it updates previous value when current value changes', () => {
    const { rerender } = render(<PreviousValue value={1} />);
    
    expect(screen.getByText(/Current Value: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Value: undefined/i)).toBeInTheDocument();

    rerender(<PreviousValue value={2} />);
    
    expect(screen.getByText(/Current Value: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Previous Value: 1/i)).toBeInTheDocument();
});
