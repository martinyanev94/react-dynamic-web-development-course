import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

test('renders the themed component with light mode', () => {
    const { getByText } = render(
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
    expect(getByText(/Light Mode/i)).toBeInTheDocument();
});
