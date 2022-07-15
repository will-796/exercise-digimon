import { render, screen } from '@testing-library/react';
import React from 'react';
import Digimon from './Digimon';

describe('Teste unitário do componente Digimon', () => {
  it('renders Digimon', async () => {
    const digimonProp = { name: 'xablau', level: '99', img: 'imagem' };
    render(<Digimon digimon={ digimonProp } />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('xablau');
    expect(screen.getByText(/99/)).toBeInTheDocument();
    expect(screen.getByRole('img', { src: 'imagem' })).toBeInTheDocument();
  });

  it('renders Digimon error', async () => {
    render(<Digimon error="erro do caralho" />);
    expect(screen.getByText(/erro do caralho/)).toBeInTheDocument();
  });
});
