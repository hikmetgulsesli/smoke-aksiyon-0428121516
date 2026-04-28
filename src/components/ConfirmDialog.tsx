interface ConfirmDialogProps {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  title,
  message,
  confirmLabel = 'Onayla',
  cancelLabel = 'İptal',
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-surface/60 backdrop-blur-md flex items-center justify-center p-4" onClick={onCancel} role="dialog" aria-modal="true">
      <div className="relative z-50 bg-surface-container-lowest w-full max-w-md rounded-xl shadow-[0_24px_48px_-12px_rgba(70,72,212,0.1)] border border-outline-variant/15 p-8 flex flex-col items-center text-center">
        <h2 className="font-headline text-headline-md font-bold tracking-tight text-on-surface mb-3">{title}</h2>
        <p className="font-body text-body-md text-on-surface-variant leading-relaxed mb-8">{message}</p>
        <div className="flex w-full gap-4">
          <button
            className="flex-1 bg-transparent border-2 border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low font-label text-sm font-semibold py-3 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            className="flex-1 bg-error text-on-error hover:bg-error/90 font-label text-sm font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
