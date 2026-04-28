export interface Habit {
  id: string;
  name: string;
  completedDates: string[];
  createdAt: string;
}

export interface AppState {
  habits: Habit[];
}
