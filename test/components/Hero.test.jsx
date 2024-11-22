import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../../src/components/Hero';
import '@testing-library/jest-dom/vitest';

describe('Hero component', () => {
   it('should render with correct text and children', () => {
      const { getByTestId } = render(<Hero/>);
      expect(getByTestId('hero-test')).toBeInTheDocument();
   });

   it('should render hero props', () => {
      render(
         <Hero title='hero title' subtitle='Hero subtitle'/>
      );
      expect(screen.getByText(/hero title/i)).toBeInTheDocument();
      expect(screen.getByText(/hero subtitle/i)).toBeInTheDocument();
   });

});
