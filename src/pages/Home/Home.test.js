import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Home from './index';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const history = createMemoryHistory();

describe('Home', () => {

  it('Render Home', () => {
    render(
      <ThemeProvider theme={theme}>
      <Router history={history}>
        <Home />
      </Router>
      </ThemeProvider>

    );
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
});