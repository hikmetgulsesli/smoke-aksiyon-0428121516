import { useState } from 'react';

interface NotesPanelProps {
  initialNote?: string;
  onSave?: (note: string) => void;
}

export function NotesPanel({ initialNote = '', onSave }: NotesPanelProps) {
  const [note, setNote] = useState(initialNote);

  return (
    <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
      <h3 className="text-headline-md font-semibold text-on-surface mb-4">Notlar</h3>
      <textarea
        className="w-full bg-transparent border border-outline-variant rounded-lg p-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        rows={4}
        placeholder="Not ekle..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="mt-4 bg-primary text-on-primary px-4 py-2 rounded-lg font-label font-semibold text-sm hover:bg-primary-container transition-colors cursor-pointer"
        onClick={() => onSave?.(note)}
      >
        Kaydet
      </button>
    </div>
  );
}
