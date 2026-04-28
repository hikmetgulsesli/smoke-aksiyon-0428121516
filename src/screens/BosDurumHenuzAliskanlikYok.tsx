import { useState, FormEvent } from "react";

interface BosDurumHenuzAliskanlikYokProps {
  onAdd: (name: string) => void;
  onTabChange?: (tab: string) => void;
}

export function BosDurumHenuzAliskanlikYok({ onAdd, onTabChange }: BosDurumHenuzAliskanlikYokProps) {
  const [input, setInput] = useState("");

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
      {/* TopNavBar (Web & Mobile Hybrid Shell) */}
      <header className="w-full top-0 sticky z-40 bg-[#f9f9ff]">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="text-2xl font-black tracking-tighter text-[#111c2d]">
            smoke-aksiyon
          </div>
          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Active Nav Item */}
            <button className="text-[#4648d4] font-bold opacity-70 scale-95 transition-all flex items-center gap-2 cursor-pointer" onClick={() => onTabChange?.('takip')}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
              <span>Takip</span>
            </button>
            {/* Inactive Nav Items */}
            <button className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300 flex items-center gap-2 cursor-pointer" onClick={() => onTabChange?.('analiz')}>
              <span className="material-symbols-outlined">analytics</span>
              <span>Analiz</span>
            </button>
            <button className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300 flex items-center gap-2 cursor-pointer" onClick={() => onTabChange?.('profil')}>
              <span className="material-symbols-outlined">person</span>
              <span>Profil</span>
            </button>
          </nav>
          {/* Trailing Icons */}
          <div className="flex items-center gap-4 text-[#4648d4]">
            <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Bildirimler" onClick={() => alert('Bildirimler yakında!')}>
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="hover:text-[#4648d4] transition-colors duration-300 cursor-pointer" aria-label="Ayarlar" onClick={() => onTabChange?.('profil')}>
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col pb-32 md:pb-12">
        {/* Add Habit Form (Editorial Layering - Level 2) */}
        <section className="w-full bg-surface-container-lowest shadow-[0_24px_48px_-12px_rgba(70,72,212,0.04)] rounded-2xl p-6 mb-16 relative overflow-hidden">
          {/* Decorative subtle top accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container opacity-50"></div>
          <h2 className="text-headline-md font-bold tracking-tight text-on-surface mb-6">Yeni Aksiyon Başlat</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full relative">
              <label className="block text-label-sm font-medium text-on-surface-variant mb-2" htmlFor="habit-name">Alışkanlık Adı</label>
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 px-0 py-2 text-body-md text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline"
                id="habit-name"
                placeholder="Örn: Sabah Koşusu"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-label font-semibold tracking-wide hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Ekle
            </button>
          </form>
        </section>
        {/* Empty State Central Hub (The Kinetic Sanctuary) */}
        <section className="flex-1 flex flex-col items-center justify-center text-center mt-8">
          {/* Large Subtle Icon */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-150"></div>
            <span className="material-symbols-outlined text-[120px] text-surface-dim relative z-10" style={{ fontVariationSettings: "'wght' 200" }}>
              local_fire_department
            </span>
          </div>
          {/* Typography Authority */}
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-4 leading-tight">
            Henüz alışkanlık yok
          </h1>
          <p className="text-body-md text-on-surface-variant text-lg max-w-sm leading-relaxed">
            Yukarıdan ilk alışkanlığını ekle!
          </p>
        </section>
      </main>
      {/* BottomNavBar (Mobile Shell - Hidden on md+) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/80 backdrop-blur-2xl rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)]">
        {/* Active Item: Takip */}
        <button className="flex flex-col items-center justify-center text-[#4648d4] scale-90 transition-transform duration-200 cursor-pointer" onClick={() => onTabChange?.('takip')}>
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
          <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Takip</span>
        </button>
        {/* Inactive Item: Analiz */}
        <button className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onTabChange?.('analiz')}>
          <span className="material-symbols-outlined mb-1">analytics</span>
          <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Analiz</span>
        </button>
        {/* Inactive Item: Profil */}
        <button className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => onTabChange?.('profil')}>
          <span className="material-symbols-outlined mb-1">person</span>
          <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Profil</span>
        </button>
      </nav>
    </>
  );
}
