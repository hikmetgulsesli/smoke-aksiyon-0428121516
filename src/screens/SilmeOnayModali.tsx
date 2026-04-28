// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Silme Onay Modalı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SilmeOnayModaliProps {}

export function SilmeOnayModali(props: SilmeOnayModaliProps) {
  return (
    <>
      {/* Background Content (Dashboard Mockup) */}
      <div className="absolute inset-0 z-0 opacity-40 blur-[2px] pointer-events-none">
      {/* Top Nav Mock */}
      <header className="bg-[#f9f9ff] flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto border-b border-surface-container-low">
      <div className="text-2xl font-black tracking-tighter text-[#111c2d]">smoke-aksiyon</div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-[#4648d4]">notifications</span>
      <span className="material-symbols-outlined text-[#464554]">settings</span>
      </div>
      </header>
      {/* Main Content Mock */}
      <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-1 md:col-span-2 space-y-8">
      <div>
      <h1 className="text-display-sm font-headline font-bold tracking-tight text-on-surface mb-2">Günlük Bakış</h1>
      <p className="text-body-md text-on-surface-variant">Bugün 3 alışkanlık tamamlamanız bekleniyor.</p>
      </div>
      <div className="space-y-4">
      <div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary-fixed shadow-[0_24px_48px_-12px_rgba(70,72,212,0.04)] relative">
      <div className="flex justify-between items-center">
      <div>
      <h3 className="text-headline-md font-semibold text-on-surface">Sabah Yürüyüşü</h3>
      <p className="text-label-sm text-on-surface-variant mt-1">07:00'da hatırlat</p>
      </div>
      <div className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center">
      <span className="material-symbols-outlined text-outline-variant text-sm">check</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col-span-1 space-y-6">
      <div className="bg-surface-container-low p-6 rounded-xl">
      <h4 className="text-body-md font-semibold text-on-surface mb-4">Haftalık İlerleme</h4>
      <div className="flex gap-1">
      <div className="h-1.5 flex-1 bg-primary rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-primary rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-primary rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-outline-variant/20 rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-outline-variant/20 rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-outline-variant/20 rounded-lg"></div>
      <div className="h-1.5 flex-1 bg-outline-variant/20 rounded-lg"></div>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 z-40 bg-surface/60 backdrop-blur-md flex items-center justify-center p-4">
      {/* Modal Container */}
      <div className="relative z-50 bg-surface-container-lowest w-full max-w-md rounded-xl shadow-[0_24px_48px_-12px_rgba(70,72,212,0.1)] border border-outline-variant/15 p-8 flex flex-col items-center text-center transform transition-all scale-100 opacity-100">
      {/* Warning Icon */}
      <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-error text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>delete</span>
      </div>
      {/* Content */}
      <h2 className="font-headline text-headline-md font-bold tracking-tight text-on-surface mb-3">
                      Alışkanlığı Sil
                  </h2>
      <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-8">
                      Bu alışkanlığı silmek istediğinize emin misiniz? Bu işlem geri alınamaz ve tüm geçmiş verileriniz kaybolacaktır.
                  </p>
      {/* Actions */}
      <div className="flex w-full gap-4">
      <button className="flex-1 bg-transparent border-2 border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low font-label text-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                          İptal
                      </button>
      <button className="flex-1 bg-error text-on-error hover:bg-error/90 font-label text-sm font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200">
                          Sil
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
