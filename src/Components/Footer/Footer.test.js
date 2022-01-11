import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';

describe('Foo', () => {

    const mockFooter = 'footer';

    it('Render Foot', () => {
        render(
            <ThemeProvider theme={theme}>
                <Footer />
            </ThemeProvider>
        );
        const footer = screen.getByTestId(mockFooter);
        expect(footer).toBeInTheDocument();
    });

});
