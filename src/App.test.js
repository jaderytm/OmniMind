// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OmniMind title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OmniMind/i);
    expect(titleElement).toBeInTheDocument();
});
