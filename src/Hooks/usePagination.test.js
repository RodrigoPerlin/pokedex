import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import UsePagination from './usePagination';
import { Router } from 'react-router-dom';


const history = createMemoryHistory();

describe('Footer', () => {

  it('Render Footer', () => {
    render(
        <Router history={history}>
          <UsePagination />
        </Router>
    );
  });
});