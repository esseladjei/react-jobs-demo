import { describe, it, expect } from 'vitest';
import { Card } from '../../src/components/Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

describe('Card component', () => {
   it('should render with correct text and children', () => {
      const { container } = render(<Card classes={'test-card'}></Card>);
      expect(container.firstChild.classList.contains('test-card')).toBeTruthy();
   });

   it('should render children  when child element is provided', () => {
      render(
         <Card classes={'test-card'}>
            <h1>I am a header</h1>
            <p>I am a child</p>
         </Card>
      );
      expect(screen.getByText(/I am a header/i)).toBeInTheDocument();
      expect(screen.getByText(/I am a child/i)).toBeInTheDocument();
   });

   it('should not render children  when children prop is not provided', () => {
     const {container} =render(<Card></Card>);
      expect(container.firstChild.textContent).toBe('');
   });
});
