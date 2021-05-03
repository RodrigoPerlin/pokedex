import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonMobile from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

describe('ButtonMobile', () => {

    const mockBack = 'Anterior';
    const mockNext = 'Próxima';

    const mockSetStatePage = jest.fn(() => '11');

    it('Render ButtonMobile, Click Back', () => {
        render(
            <ThemeProvider theme={theme}>
            <ButtonMobile
            setStatePage={mockSetStatePage}
            >{mockBack}
            </ButtonMobile>
            </ThemeProvider>

            );
        const btn = screen.getByText(mockBack);

        expect(btn).toBeInTheDocument();

        fireEvent.click(btn);

    });

    it('Render ButtonMobile, Click Next', () => {
        render(
            <ThemeProvider theme={theme}>

            <ButtonMobile
            setStatePage={mockSetStatePage}
            >{mockBack}
            </ButtonMobile>
            </ThemeProvider>
);
        const btn = screen.getByText(mockNext);

        expect(btn).toBeInTheDocument();

        fireEvent.click(btn);

    });

});
