import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';

describe('Button', () => {

    const mockVoltar = 'Voltar';

    it('Render button ,Click2', () => {
        const comp = render(
            <ThemeProvider theme={theme}>
                <Button>
                    {mockVoltar}</Button>
            </ThemeProvider>
        );

        expect(comp.baseElement).toBeInTheDocument();
        const btn = screen.getByRole('button', { name: /Voltar/i });
        expect(btn).toBeInTheDocument();
    });
});
