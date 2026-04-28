import { useState, useEffect, useCallback } from 'react';
import type { AppState, Habit } from '../../types';

const STORAGE_KEY = 'smoke-aksiyon-habits';

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.habits)) {
        return { habits: parsed.habits };
      }
    }
  } catch {
    // ignore parse errors
  }
  return { habits: [] };
}

function saveState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function usePersistentAppState() {
  const [state, setState] = useState<AppState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const addHabit = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const habit: Habit = {
      id: crypto.randomUUID(),
      name: trimmed,
      completedDates: [],
      createdAt: new Date().toISOString(),
    };
    setState((prev) => ({ habits: [...prev.habits, habit] }));
  }, []);

  const toggleHabit = useCallback((id: string) => {
    const today = getToday();
    setState((prev) => ({
      habits: prev.habits.map((h) => {
        if (h.id !== id) return h;
        const completed = new Set(h.completedDates);
        if (completed.has(today)) {
          completed.delete(today);
        } else {
          completed.add(today);
        }
        return { ...h, completedDates: Array.from(completed) };
      }),
    }));
  }, []);

  const deleteHabit = useCallback((id: string) => {
    setState((prev) => ({
      habits: prev.habits.filter((h) => h.id !== id),
    }));
  }, []);

  return { state, addHabit, toggleHabit, deleteHabit };
}
