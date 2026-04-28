interface SilmeOnayModaliProps {
  habitName: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function SilmeOnayModali({ habitName, isOpen, onConfirm, onCancel }: SilmeOnayModaliProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay Backdrop */}
      <div className="fixed inset-0 z-40 bg-surface/60 backdrop-blur-md flex items-center justify-center p-4" onClick={onCancel} role="dialog" aria-modal="true" aria-labelledby="delete-title">
        {/* Modal Container */}
        <div className="relative z-50 bg-surface-container-lowest w-full max-w-md rounded-xl shadow-[0_24px_48px_-12px_rgba(70,72,212,0.1)] border border-outline-variant/15 p-8 flex flex-col items-center text-center transform transition-all scale-100 opacity-100">
          {/* Warning Icon */}
          <div className="w-16 h-16 bg-error-container rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-error text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>delete</span>
          </div>
          {/* Content */}
          <h2 id="delete-title" className="font-headline text-headline-md font-bold tracking-tight text-on-surface mb-3">
            Alışkanlığı Sil
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-8">
            &ldquo;{habitName}&rdquo; alışkanlığını silmek istediğinize emin misiniz? Bu işlem geri alınamaz ve tüm geçmiş verileriniz kaybolacaktır.
          </p>
          {/* Actions */}
          <div className="flex w-full gap-4">
            <button
              className="flex-1 bg-transparent border-2 border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low font-label text-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={onCancel}
              data-testid="cancel-delete"
            >
              İptal
            </button>
            <button
              className="flex-1 bg-error text-on-error hover:bg-error/90 font-label text-sm font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
              onClick={onConfirm}
              data-testid="confirm-delete"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
