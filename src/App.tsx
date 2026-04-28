import { useState, useCallback } from 'react';
import { usePersistentAppState } from './features/app/usePersistentAppState';
import { AnaSayfaDashboard } from './screens/AnaSayfaDashboard';
import { BosDurumHenuzAliskanlikYok } from './screens/BosDurumHenuzAliskanlikYok';
import { SilmeOnayModali } from './screens/SilmeOnayModali';
import type { Habit } from './types';

function getToday(): string {
  return new Date().toISOString().split('T')[0];
}

function calculateStreak(completedDates: string[]): number {
  const dates = new Set(completedDates);
  const today = getToday();
  let streak = 0;
  let current = new Date();
  if (!dates.has(today)) {
    current.setDate(current.getDate() - 1);
  }
  const fmt = (d: Date) => d.toISOString().split('T')[0];
  while (dates.has(fmt(current))) {
    streak++;
    current.setDate(current.getDate() - 1);
  }
  return streak;
}

function AnalizPanel({ habits }: { habits: Habit[] }) {
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce((sum, h) => sum + h.completedDates.length, 0);
  const bestStreak = Math.max(0, ...habits.map((h) => calculateStreak(h.completedDates)));
  const today = getToday();
  const completedToday = habits.filter((h) => h.completedDates.includes(today)).length;

  return (
    <main className="max-w-3xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-display-md font-headline font-bold text-on-surface tracking-tight mb-8">Analiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
          <div className="text-label-sm text-on-surface-variant mb-1">Toplam Alışkanlık</div>
          <div className="text-3xl font-bold text-on-surface">{totalHabits}</div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
          <div className="text-label-sm text-on-surface-variant mb-1">Toplam Tamamlama</div>
          <div className="text-3xl font-bold text-on-surface">{totalCompletions}</div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
          <div className="text-label-sm text-on-surface-variant mb-1">Bugün Tamamlanan</div>
          <div className="text-3xl font-bold text-on-surface">{completedToday}</div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
          <div className="text-label-sm text-on-surface-variant mb-1">En İyi Seri</div>
          <div className="text-3xl font-bold text-primary">{bestStreak}</div>
        </div>
      </div>
      {habits.length > 0 && (
        <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
          <h2 className="text-headline-md font-semibold text-on-surface mb-4">Alışkanlık İlerlemesi</h2>
          <div className="space-y-4">
            {habits.map((habit) => {
              const streak = calculateStreak(habit.completedDates);
              return (
                <div key={habit.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-body-md font-medium text-on-surface">{habit.name}</div>
                    <div className="text-label-sm text-on-surface-variant">{streak} gün serili</div>
                  </div>
                  <div className="w-32 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, streak * 7)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {habits.length === 0 && (
        <div className="text-center py-16 text-on-surface-variant">
          Henüz veri yok. Takip sekmesinden alışkanlık ekleyin.
        </div>
      )}
    </main>
  );
}

function ProfilPanel() {
  return (
    <main className="max-w-3xl mx-auto px-6 pt-8 pb-12">
      <h1 className="text-display-md font-headline font-bold text-on-surface tracking-tight mb-8">Profil</h1>
      <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <div>
            <div className="text-headline-md font-semibold text-on-surface">Kullanıcı</div>
            <div className="text-body-md text-on-surface-variant">smoke-aksiyon kullanıcısı</div>
          </div>
        </div>
        <div className="border-t border-outline-variant/30 pt-6">
          <h3 className="text-label-sm font-semibold text-on-surface-variant uppercase tracking-wider mb-4">Uygulama</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <span className="text-body-md text-on-surface">Versiyon</span>
              <span className="text-body-md text-on-surface-variant">1.0.0</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-body-md text-on-surface">Dil</span>
              <span className="text-body-md text-on-surface-variant">Türkçe</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  const { state, addHabit, toggleHabit, deleteHabit } = usePersistentAppState();
  const [activeTab, setActiveTab] = useState('takip');
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const handleDeleteRequest = useCallback((id: string) => {
    setDeleteTarget(id);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (deleteTarget) {
      deleteHabit(deleteTarget);
    }
    setDeleteTarget(null);
  }, [deleteTarget, deleteHabit]);

  const handleDeleteCancel = useCallback(() => {
    setDeleteTarget(null);
  }, []);

  const deletingHabit = deleteTarget ? state.habits.find((h) => h.id === deleteTarget) : null;

  const isTakip = activeTab === 'takip';

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-[Inter] tracking-tight">
      {/* Shared top nav for non-takip tabs */}
      {!isTakip && (
        <nav className="w-full top-0 sticky z-40 bg-[#f9f9ff]">
          <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
            <div className="text-2xl font-black tracking-tighter text-[#111c2d]">smoke-aksiyon</div>
            <div className="hidden md:flex items-center space-x-8">
              <button className={`cursor-pointer ${activeTab === 'takip' ? 'text-[#4648d4] font-bold opacity-70 scale-95 transition-all' : 'text-[#464554] hover:text-[#4648d4] transition-colors duration-300'}`} onClick={() => setActiveTab('takip')}>
                Takip
              </button>
              <button className={`cursor-pointer ${activeTab === 'analiz' ? 'text-[#4648d4] font-bold opacity-70 scale-95 transition-all' : 'text-[#464554] hover:text-[#4648d4] transition-colors duration-300'}`} onClick={() => setActiveTab('analiz')}>
                Analiz
              </button>
              <button className={`cursor-pointer ${activeTab === 'profil' ? 'text-[#4648d4] font-bold opacity-70 scale-95 transition-all' : 'text-[#464554] hover:text-[#4648d4] transition-colors duration-300'}`} onClick={() => setActiveTab('profil')}>
                Profil
              </button>
            </div>
            <div className="flex items-center space-x-4 text-[#4648d4]">
              <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Bildirimler" onClick={() => alert('Bildirimler yakında!')}>
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Ayarlar" onClick={() => setActiveTab('profil')}>
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Content */}
      {isTakip && state.habits.length === 0 && (
        <BosDurumHenuzAliskanlikYok onAdd={addHabit} onTabChange={setActiveTab} />
      )}
      {isTakip && state.habits.length > 0 && (
        <AnaSayfaDashboard
          habits={state.habits}
          onAdd={addHabit}
          onToggle={toggleHabit}
          onDelete={handleDeleteRequest}
          onTabChange={setActiveTab}
        />
      )}
      {activeTab === 'analiz' && (
        <AnalizPanel habits={state.habits} />
      )}
      {activeTab === 'profil' && (
        <ProfilPanel />
      )}

      {/* Shared bottom nav for non-takip tabs */}
      {!isTakip && (
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/80 backdrop-blur-2xl rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)]">
          <button className={`flex flex-col items-center justify-center cursor-pointer ${activeTab === 'takip' ? 'text-[#4648d4] scale-110 transition-transform scale-90 duration-200' : 'text-[#464554] opacity-60 hover:opacity-100 transition-opacity'}`} onClick={() => setActiveTab('takip')}>
            <span className="material-symbols-outlined mb-1">task_alt</span>
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Takip</span>
          </button>
          <button className={`flex flex-col items-center justify-center cursor-pointer ${activeTab === 'analiz' ? 'text-[#4648d4] scale-110 transition-transform scale-90 duration-200' : 'text-[#464554] opacity-60 hover:opacity-100 transition-opacity'}`} onClick={() => setActiveTab('analiz')}>
            <span className="material-symbols-outlined mb-1">analytics</span>
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Analiz</span>
          </button>
          <button className={`flex flex-col items-center justify-center cursor-pointer ${activeTab === 'profil' ? 'text-[#4648d4] scale-110 transition-transform scale-90 duration-200' : 'text-[#464554] opacity-60 hover:opacity-100 transition-opacity'}`} onClick={() => setActiveTab('profil')}>
            <span className="material-symbols-outlined mb-1">person</span>
            <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Profil</span>
          </button>
        </nav>
      )}

      <SilmeOnayModali
        habitName={deletingHabit?.name ?? ''}
        isOpen={!!deletingHabit}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
}
