import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonDesktop from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

describe('ButtonDesktop', () => {

    const mockNumber = '1';
    const mockSetStatePage = jest.fn(() => '11');

    it('Render ButtonDesktops', () => {
        render(
            <ThemeProvider theme={theme}>
                <ButtonDesktop
                    setStatePage={mockSetStatePage}
                >   {mockNumber}
                </ButtonDesktop>
            </ThemeProvider>
            );


        const btn = screen.getByText(mockNumber);

        expect(btn).toBeInTheDocument();

        fireEvent.click(btn);

    });
});