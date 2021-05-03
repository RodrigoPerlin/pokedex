import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';

describe('Footer', () => {

    const mockDevelop = 'Desenvolvido por Rodrigo Perlin &copy;';

    it('Render Footer', () => {
        render(
            <ThemeProvider theme={theme}>
                <Footer />
            </ThemeProvider>
        );
        const footer = screen.getByTestId('Footer')
        expect(footer).toBeInTheDocument();
    });

});
