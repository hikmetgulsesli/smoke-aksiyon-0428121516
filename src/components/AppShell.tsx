import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function AppShell({ children, activeTab = 'takip', onTabChange }: AppShellProps) {
  const tabClasses = (tab: string) =>
    activeTab === tab
      ? 'text-[#4648d4] font-bold opacity-70 scale-95 transition-all'
      : 'text-[#464554] hover:text-[#4648d4] transition-colors duration-300';

  const mobileTabClasses = (tab: string) =>
    activeTab === tab
      ? 'flex flex-col items-center justify-center text-[#4648d4] scale-110 transition-transform scale-90 duration-200'
      : 'flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity';

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-[Inter] tracking-tight">
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky z-40 bg-[#f9f9ff]">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-[#111c2d]">smoke-aksiyon</div>
          <div className="hidden md:flex items-center space-x-8">
            <button className={tabClasses('takip')} onClick={() => onTabChange?.('takip')}>
              Takip
            </button>
            <button className={tabClasses('analiz')} onClick={() => onTabChange?.('analiz')}>
              Analiz
            </button>
            <button className={tabClasses('profil')} onClick={() => onTabChange?.('profil')}>
              Profil
            </button>
          </div>
          <div className="flex items-center space-x-4 text-[#4648d4]">
            <button
              className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer"
              aria-label="Bildirimler"
              onClick={() => alert('Bildirimler yakında!')}
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer"
              aria-label="Ayarlar"
              onClick={() => onTabChange?.('profil')}
            >
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        {children}
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/80 backdrop-blur-2xl rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)]">
        <button className={mobileTabClasses('takip')} onClick={() => onTabChange?.('takip')}>
          <span className="material-symbols-outlined mb-1">task_alt</span>
          <span className="font-[Inter] text-[11px] font-semibold uppercase tracking-widest">Takip</span>
        </button>
        <button className={mobileTabClasses('analiz')} onClick={() => onTabChange?.('analiz')}>
          <span className="material-symbols-outlined mb-1">analytics</span>
          <span className="font-[Inter] text-[11px] font-semibold uppercase tracking-widest">Analiz</span>
        </button>
        <button className={mobileTabClasses('profil')} onClick={() => onTabChange?.('profil')}>
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-[Inter] text-[11px] font-semibold uppercase tracking-widest">Profil</span>
        </button>
      </nav>
    </div>
  );
}
