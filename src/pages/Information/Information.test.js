import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Information from './index';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';

const history = createMemoryHistory();
const mockInformation = 'information';

describe('Information', () => {

  it('Render Information, Button Voltar', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Information />
        </Router>
      </ThemeProvider>
    );
    const btn = screen.getByRole('button', { name: 'Voltar' });

    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

  });

  it('Render Information, data-testid', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Information />
        </Router>
      </ThemeProvider>
    );
    const information = screen.getByTestId(mockInformation)
    expect(information).toBeInTheDocument();

  });

});