import { ReactNode } from 'react';

interface SettingsPanelProps {
  children?: ReactNode;
}

export function SettingsPanel({ children }: SettingsPanelProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl ambient-shadow p-6">
      <h2 className="text-headline-md font-semibold text-on-surface mb-4">Ayarlar</h2>
      {children}
    </div>
  );
}
