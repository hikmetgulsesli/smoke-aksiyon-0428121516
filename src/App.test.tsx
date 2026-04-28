import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock crypto.randomUUID for predictable IDs
const mockUUIDs = ['habit-1', 'habit-2', 'habit-3'];
let uuidIndex = 0;
Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => {
      const id = mockUUIDs[uuidIndex % mockUUIDs.length];
      uuidIndex++;
      return id;
    },
  },
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock alert
window.alert = vi.fn();

beforeEach(() => {
  localStorageMock.clear();
  uuidIndex = 0;
});

describe('App', () => {
  it('renders empty state when no habits', () => {
    render(<App />);
    expect(screen.getByText('Henüz alışkanlık yok')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Örn: Sabah Koşusu')).toBeInTheDocument();
  });

  it('adds a habit from empty state', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Örn: Sabah Koşusu');
    const button = screen.getByRole('button', { name: /ekle/i });

    fireEvent.change(input, { target: { value: 'Sabah Koşusu' } });
    fireEvent.click(button);

    expect(screen.getByText('Sabah Koşusu')).toBeInTheDocument();
    expect(screen.getByText('Bugünün Hedefleri')).toBeInTheDocument();
  });

  it('adds a habit from dashboard', () => {
    render(<App />);
    // Add first habit
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Kitap Oku' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    // Add second from dashboard input
    fireEvent.change(screen.getByPlaceholderText('Yeni alışkanlık ekle...'), { target: { value: 'Meditasyon' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
    expect(screen.getByText('Meditasyon')).toBeInTheDocument();
  });

  it('does not add empty habit', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));
    expect(screen.getByText('Henüz alışkanlık yok')).toBeInTheDocument();
  });

  it('toggles habit completion', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Yürüyüş' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    const toggleButton = screen.getByLabelText('Tamamlandı olarak işaretle');
    fireEvent.click(toggleButton);

    // After clicking, label should change to unmark
    expect(screen.getByLabelText('Tamamlandı olarak işaretleme kaldır')).toBeInTheDocument();
    expect(screen.getByText('1 gün serili')).toBeInTheDocument();
  });

  it('deletes a habit with confirmation', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Silinecek Alışkanlık' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    const deleteButton = screen.getByLabelText('Sil');
    fireEvent.click(deleteButton);

    expect(screen.getByText('Alışkanlığı Sil')).toBeInTheDocument();
    expect(screen.getByText(/Silinecek Alışkanlık/)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('confirm-delete'));

    waitFor(() => {
      expect(screen.queryByText('Silinecek Alışkanlık')).not.toBeInTheDocument();
    });
  });

  it('cancels delete confirmation', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Kalacak Alışkanlık' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    fireEvent.click(screen.getByLabelText('Sil'));
    fireEvent.click(screen.getByTestId('cancel-delete'));

    expect(screen.getByText('Kalacak Alışkanlık')).toBeInTheDocument();
  });

  it('persists habits to localStorage', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Spor' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    const stored = JSON.parse(localStorageMock.getItem('smoke-aksiyon-habits') || '{}');
    expect(stored.habits).toHaveLength(1);
    expect(stored.habits[0].name).toBe('Spor');
  });

  it('loads habits from localStorage', () => {
    const data = {
      habits: [
        {
          id: 'existing-1',
          name: 'Mevcut Alışkanlık',
          completedDates: [],
          createdAt: new Date().toISOString(),
        },
      ],
    };
    localStorageMock.setItem('smoke-aksiyon-habits', JSON.stringify(data));

    render(<App />);
    expect(screen.getByText('Mevcut Alışkanlık')).toBeInTheDocument();
    expect(screen.getByText('Bugünün Hedefleri')).toBeInTheDocument();
  });

  it('shows streak count correctly', () => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const twoDaysAgo = new Date(Date.now() - 2 * 86400000).toISOString().split('T')[0];

    const data = {
      habits: [
        {
          id: 'streak-habit',
          name: 'Serili Alışkanlık',
          completedDates: [today, yesterday, twoDaysAgo],
          createdAt: new Date().toISOString(),
        },
      ],
    };
    localStorageMock.setItem('smoke-aksiyon-habits', JSON.stringify(data));

    render(<App />);
    expect(screen.getByText('3 gün serili')).toBeInTheDocument();
  });

  it('switches to Analiz tab', () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText('Örn: Sabah Koşusu'), { target: { value: 'Test' } });
    fireEvent.click(screen.getByRole('button', { name: /ekle/i }));

    const analizButton = screen.getAllByRole('button', { name: /analiz/i })[0];
    fireEvent.click(analizButton);

    expect(screen.getByText('Analiz')).toBeInTheDocument();
    expect(screen.getByText('Toplam Alışkanlık')).toBeInTheDocument();
  });

  it('switches to Profil tab', () => {
    render(<App />);
    const profilButton = screen.getAllByRole('button', { name: /profil/i })[0];
    fireEvent.click(profilButton);

    expect(screen.getByText('Profil')).toBeInTheDocument();
    expect(screen.getByText('Kullanıcı')).toBeInTheDocument();
  });
});
