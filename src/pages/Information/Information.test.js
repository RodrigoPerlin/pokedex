import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Information from './index';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/index';

const history = createMemoryHistory();

describe('Footer', () => {

  it('Render Footer', () => {
    render(
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Information />
        </Router>
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: 'Voltar' }));
  });
});