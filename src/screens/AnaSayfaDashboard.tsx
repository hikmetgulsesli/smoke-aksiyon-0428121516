import { useState, FormEvent } from "react";
import type { Habit } from "../../types";

interface AnaSayfaDashboardProps {
  habits: Habit[];
  onAdd: (name: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onTabChange?: (tab: string) => void;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function calculateStreak(completedDates: string[]): number {
  const dates = new Set(completedDates);
  const today = getToday();
  let streak = 0;
  let current = new Date();
  if (!dates.has(today)) {
    current.setDate(current.getDate() - 1);
  }
  const fmt = (d: Date) => d.toISOString().split("T")[0];
  while (dates.has(fmt(current))) {
    streak++;
    current.setDate(current.getDate() - 1);
  }
  return streak;
}

export function AnaSayfaDashboard({ habits, onAdd, onToggle, onDelete, onTabChange }: AnaSayfaDashboardProps) {
  const [input, setInput] = useState("");
  const today = getToday();

  const handleAdd = () => {
    if (!input.trim()) return;
    onAdd(input.trim());
    setInput("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky z-40 bg-[#f9f9ff] font-['Inter'] tracking-tight text-sm">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-[#111c2d]">
            smoke-aksiyon
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-[#4648d4] font-bold opacity-70 scale-95 transition-all cursor-pointer" onClick={() => onTabChange?.('takip')}>
              Takip
            </button>
            <button className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" onClick={() => onTabChange?.('analiz')}>
              Analiz
            </button>
            <button className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" onClick={() => onTabChange?.('profil')}>
              Profil
            </button>
          </div>
          <div className="flex items-center space-x-4 text-[#4648d4]">
            <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Bildirimler" onClick={() => alert('Bildirimler yakında!')}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Ayarlar" onClick={() => onTabChange?.('profil')}>
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        {/* Header & Add Habit Form */}
        <div className="mb-16">
          <h1 className="text-display-md font-headline font-bold text-on-surface tracking-tight mb-8">Bugünün Hedefleri</h1>
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest rounded-xl ambient-shadow p-6 ghost-border max-w-2xl flex items-center gap-4 transition-all focus-within:bg-surface-container-low">
            <span className="material-symbols-outlined text-outline">add_circle</span>
            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-body-md text-on-surface placeholder:text-on-surface-variant p-0"
              placeholder="Yeni alışkanlık ekle..."
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Yeni alışkanlık ekle"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary rounded-lg px-6 py-3 font-semibold text-label-md hover:bg-primary-container transition-colors active:shadow-[inset_0_0_0_2px_rgba(199,196,215,0.15)] cursor-pointer"
            >
              Ekle
            </button>
          </form>
        </div>

        {/* Habit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {habits.map((habit) => {
            const isCompleted = habit.completedDates.includes(today);
            const streak = calculateStreak(habit.completedDates);
            const isGold = streak >= 7;
            return (
              <div
                key={habit.id}
                className={`bg-surface-container-lowest rounded-xl ambient-shadow-hover transition-shadow relative overflow-hidden flex flex-col group ${isGold ? 'bg-gradient-to-br from-surface-container-lowest to-surface-container-low' : ''}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${isGold ? 'bg-primary' : 'bg-secondary-fixed'}`}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <button
                      className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${isCompleted ? 'bg-primary shadow-[0_2px_12px_rgba(70,72,212,0.2)]' : 'ghost-border hover:bg-surface-container group/check'}`}
                      onClick={() => onToggle(habit.id)}
                      aria-label={isCompleted ? 'Tamamlandı olarak işaretleme kaldır' : 'Tamamlandı olarak işaretle'}
                    >
                      <span className={`material-symbols-outlined transition-colors ${isCompleted ? 'text-on-primary fill-icon' : 'text-outline group-hover/check:text-primary'}`} style={{ fontSize: "20px" }}>
                        {isCompleted ? 'check_circle' : 'check'}
                      </span>
                    </button>
                    <button
                      className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                      onClick={() => onDelete(habit.id)}
                      aria-label="Sil"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>delete</span>
                    </button>
                  </div>
                  <h3 className={`text-headline-md font-semibold text-on-surface mb-2 ${isCompleted ? 'decoration-primary decoration-2 underline-offset-4' : ''}`}>{habit.name}</h3>
                  <div className={`mt-auto pt-4 flex items-center text-label-sm font-medium ${isGold ? 'text-tertiary-container font-bold' : 'text-tertiary'}`}>
                    <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>{isGold ? 'trophy' : 'local_fire_department'}</span>
                    {streak} gün serili{isGold ? '!' : ''}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden bg-white/80 backdrop-blur-2xl font-['Inter'] text-[11px] font-semibold uppercase tracking-widest fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)]">
        <button className="flex flex-col items-center justify-center text-[#4648d4] scale-110 transition-transform scale-90 duration-200 cursor-pointer" onClick={() => onTabChange?.('takip')}>
          <span className="material-symbols-outlined mb-1">task_alt</span>
          <span>Takip</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onTabChange?.('analiz')}>
          <span className="material-symbols-outlined mb-1">analytics</span>
          <span>Analiz</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onTabChange?.('profil')}>
          <span className="material-symbols-outlined mb-1">person</span>
          <span>Profil</span>
        </button>
      </nav>
    </>
  );
}
