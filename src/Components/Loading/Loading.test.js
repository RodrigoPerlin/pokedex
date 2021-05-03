import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';


describe('Loading', () => {

    const mockLoading = 'Loading';

    it('Render Loading', () => {
        render(
            <ThemeProvider theme={theme}>
                <Loading>
                    {mockLoading}
                </Loading >
            </ThemeProvider >

        );
        const loading = screen.getByText(mockLoading)
        expect(loading).toBeInTheDocument();
    });

});
