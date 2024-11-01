import { describe, it, expect } from 'vitest';
import NotFound from '../../src/components/NotFound';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

describe('NotFound 404 page', () => {
   it('should render NotFound Component', () => {
      render(
         <MemoryRouter>
            <NotFound />
         </MemoryRouter>
      );
      const h1 = screen.getByTestId('heading');
      expect(h1).toBeInTheDocument();
   });
});
