/* eslint-disable sonarjs/no-duplicate-string */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';
import { error, mockDigimon } from './mockDigimon';

describe('Teste da aplicação toda', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.clearAllMocks();
  });

  beforeEach(() => {
    // restore the spy created with spyOn
    jest.clearAllMocks();
  });
  it('renders App', async () => {
    render(<App />);
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDigimon),
    });
    const input = screen.getByLabelText(/Digimon/i);
    const button = screen.getByText(/Search Digimon/);
    userEvent.type(input, 'agumon');
    userEvent.click(button);
    expect(fetch).toHaveBeenCalled();
  });

  it('renders App', async () => {
    render(<App />);
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(error),
    }));

    const input = screen.getByLabelText(/Digimon/i);
    const button = screen.getByText(/Search Digimon/);
    userEvent.type(input, 'xablau');
    userEvent.click(button);

    expect(fetch).toHaveBeenCalled();

    expect(global.fetch()).resolves.toEqual(new Error('bagulho doido'));
    global.fetch.mockRestore();
  });

  it('lalalalala', async () => {
    jest.clearAllMocks();
    render(<App />);
    global.console = { log: jest.fn() };
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(Promise.reject(new Error('bagulho doido')));

    const input = screen.getByLabelText(/Digimon/i);
    const button = screen.getByText(/Search Digimon/);
    userEvent.type(input, 'xablau');
    userEvent.click(button);

    expect(fetch).toHaveBeenCalled();

    await waitFor(() => expect(console.log).toHaveBeenCalled());
  });

  it('qweqwe App', async () => {
    render(<App />);
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockDigimon),
    });
    const input = screen.getByLabelText(/Digimon/i);
    const button = screen.getByText(/Search Digimon/);
    userEvent.type(input, '');
    userEvent.click(button);
    expect(fetch).not.toHaveBeenCalled();
  });
});
