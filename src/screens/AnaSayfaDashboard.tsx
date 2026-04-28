// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa - Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaDashboardProps {}

export function AnaSayfaDashboard(props: AnaSayfaDashboardProps) {
  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-[#f9f9ff] font-['Inter'] tracking-tight text-sm docked full-width top-0 sticky bg-[#f0f3ff] flat no shadows flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto z-40">
      <div className="text-2xl font-black tracking-tighter text-[#111c2d]">
                  smoke-aksiyon
              </div>
      <div className="hidden md:flex items-center space-x-8">
      <a className="text-[#4648d4] font-bold opacity-70 scale-95 transition-all" href="#">Takip</a>
      <a className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300" href="#">Analiz</a>
      <a className="text-[#464554] hover:text-[#4648d4] transition-colors duration-300" href="#">Profil</a>
      </div>
      <div className="flex items-center space-x-4 text-[#4648d4]">
      <button className="hover:text-[#4648d4] transition-colors duration-300">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:text-[#4648d4] transition-colors duration-300">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-12">
      {/* Header & Add Habit Form */}
      <div className="mb-16">
      <h1 className="text-display-md font-headline font-bold text-on-surface tracking-tight mb-8">Bugünün Hedefleri</h1>
      <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6 ghost-border max-w-2xl flex items-center gap-4 transition-all focus-within:bg-surface-container-low">
      <span className="material-symbols-outlined text-outline">add_circle</span>
      <input className="flex-1 bg-transparent border-none focus:ring-0 text-body-md text-on-surface placeholder:text-on-surface-variant p-0" placeholder="Yeni alışkanlık ekle..." type="text" />
      <button className="bg-primary text-on-primary rounded-lg px-6 py-3 font-semibold text-label-md hover:bg-primary-container transition-colors active:shadow-[inset_0_0_0_2px_rgba(199,196,215,0.15)]">
                          Ekle
                      </button>
      </div>
      </div>
      {/* Habit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Habit Card: Active / Incomplete */}
      <div className="bg-surface-container-lowest rounded-xl ambient-shadow-hover transition-shadow relative overflow-hidden flex flex-col group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed"></div>
      <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-6">
      <button className="w-8 h-8 rounded-full ghost-border flex items-center justify-center hover:bg-surface-container transition-colors group/check">
      <span className="material-symbols-outlined text-outline group-hover/check:text-primary transition-colors" style={{fontSize: "20px"}}>check</span>
      </button>
      <button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>delete</span>
      </button>
      </div>
      <h3 className="text-headline-md font-semibold text-on-surface mb-2">10 dk Kitap Oku</h3>
      <div className="mt-auto pt-4 flex items-center text-label-sm text-tertiary font-medium">
      <span className="mr-1">🔥</span> 2 gün serili
                          </div>
      </div>
      </div>
      {/* Habit Card: Completed with Golden Highlights (7+ Days) */}
      <div className="bg-surface-container-lowest rounded-xl ambient-shadow-hover transition-shadow relative overflow-hidden flex flex-col group bg-gradient-to-br from-surface-container-lowest to-surface-container-low">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-6">
      <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_12px_rgba(70,72,212,0.2)]">
      <span className="material-symbols-outlined text-on-primary fill-icon" style={{fontSize: "20px"}}>check_circle</span>
      </button>
      <button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>delete</span>
      </button>
      </div>
      <h3 className="text-headline-md font-semibold text-on-surface mb-2 decoration-primary decoration-2 underline-offset-4">Sabah Yürüyüşü</h3>
      <div className="mt-auto pt-4 flex items-center text-label-sm text-tertiary-container font-bold">
      <span className="mr-1 text-tertiary">🏆</span> 14 gün serili!
                          </div>
      </div>
      </div>
      {/* Habit Card: Active / Incomplete */}
      <div className="bg-surface-container-lowest rounded-xl ambient-shadow-hover transition-shadow relative overflow-hidden flex flex-col group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-fixed"></div>
      <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-6">
      <button className="w-8 h-8 rounded-full ghost-border flex items-center justify-center hover:bg-surface-container transition-colors group/check">
      <span className="material-symbols-outlined text-outline group-hover/check:text-primary transition-colors" style={{fontSize: "20px"}}>check</span>
      </button>
      <button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100">
      <span className="material-symbols-outlined" style={{fontSize: "20px"}}>delete</span>
      </button>
      </div>
      <h3 className="text-headline-md font-semibold text-on-surface mb-2">Su İç (2 Litre)</h3>
      <div className="mt-auto pt-4 flex items-center text-label-sm text-tertiary font-medium">
      <span className="mr-1">🔥</span> 5 gün serili
                          </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden bg-white/80 backdrop-blur-2xl font-['Inter'] text-[11px] font-semibold uppercase tracking-widest docked full-width bottom-0 fixed rounded-t-[2rem] border-t border-[#464554]/5 shadow-[0_-8px_30px_rgb(70,72,212,0.04)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-8 pt-4">
      <a className="flex flex-col items-center justify-center text-[#4648d4] scale-110 transition-transform scale-90 duration-200" href="#">
      <span className="material-symbols-outlined mb-1">task_alt</span>
      <span>Takip</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity" href="#">
      <span className="material-symbols-outlined mb-1">analytics</span>
      <span>Analiz</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#464554] opacity-60 hover:opacity-100 transition-opacity" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span>Profil</span>
      </a>
      </nav>
    </>
  );
}
