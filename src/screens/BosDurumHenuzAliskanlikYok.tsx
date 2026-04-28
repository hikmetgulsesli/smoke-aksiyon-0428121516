// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum - Henüz Alışkanlık Yok
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumHenuzAliskanlikYokProps {}

export function BosDurumHenuzAliskanlikYok(props: BosDurumHenuzAliskanlikYokProps) {
  return (
    <>
      {/* TopNavBar (Web & Mobile Hybrid Shell) */}
      <header className="w-full top-0 sticky z-40 bg-[#f9f9ff] dark:bg-slate-950 font-['Inter'] tracking-tight text-sm">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
      {/* Brand */}
      <div className="text-2xl font-black tracking-tighter text-[#111c2d] dark:text-slate-50">
                      smoke-aksiyon
                  </div>
      {/* Desktop Navigation Links (Hidden on Mobile) */}
      <nav className="hidden md:flex items-center gap-8">
      {/* Active Nav Item */}
      <a className="text-[#4648d4] font-bold opacity-70 scale-95 transition-all flex items-center gap-2" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>task_alt</span>
      <span>Takip</span>
      </a>
      {/* Inactive Nav Items */}
      <a className="text-[#464554] dark:text-slate-400 hover:text-[#4648d4] transition-colors duration-300 flex items-center gap-2" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span>Analiz</span>
      </a>
      <a className="text-[#464554] dark:text-slate-400 hover:text-[#4648d4] transition-colors duration-300 flex items-center gap-2" href="#">
      <span className="material-symbols-outlined">person</span>
      <span>Profil</span>
      </a>
      </nav>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4 text-[#4648d4] dark:text-[#6366F1]">
      <button className="hover:text-[#4648d4] transition-colors duration-300">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:text-[#4648d4] transition-colors duration-300">
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
      <form className="flex flex-col sm:flex-row gap-4 items-end">
      <div className="flex-1 w-full relative">
      <label className="block text-label-sm font-medium text-on-surface-variant mb-2" htmlFor="habit-name">Alışkanlık Adı</label>
      <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant/30 px-0 py-2 text-body-md text-on-surface focus:ring-0 focus:border-primary transition-colors placeholder:text-outline" id="habit-name" placeholder="Örn: Sabah Koşusu" type="text" />
      </div>
      <button className="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 rounded-lg font-label font-semibold tracking-wide hover:bg-primary-container hover:-translate-y-0.5 transition-all duration-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2" type="button">
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
      <span className="material-symbols-outlined text-[120px] text-surface-dim relative z-10" style={{fontVariationSettings: "'wght' 200"}}>
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
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4 bg-white/80 backdrop-blur-2xl dark:bg-slate-900/80 rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)]">
      {/* Active Item: Takip */}
      <a className="flex flex-col items-center justify-center text-[#4648d4] dark:text-[#6366F1] scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>task_alt</span>
      <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Takip</span>
      </a>
      {/* Inactive Item: Analiz */}
      <a className="flex flex-col items-center justify-center text-[#464554] dark:text-slate-500 opacity-60 hover:opacity-100 transition-opacity" href="#">
      <span className="material-symbols-outlined mb-1">analytics</span>
      <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Analiz</span>
      </a>
      {/* Inactive Item: Profil */}
      <a className="flex flex-col items-center justify-center text-[#464554] dark:text-slate-500 opacity-60 hover:opacity-100 transition-opacity" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span className="font-['Inter'] text-[11px] font-semibold uppercase tracking-widest">Profil</span>
      </a>
      </nav>
    </>
  );
}
