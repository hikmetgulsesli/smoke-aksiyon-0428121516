interface CounterPanelProps {
  streak: number;
  label?: string;
}

export function CounterPanel({ streak, label = 'gün serili' }: CounterPanelProps) {
  return (
    <div className="flex items-center text-label-sm text-tertiary font-medium">
      <span className="material-symbols-outlined mr-1" style={{ fontSize: '16px' }}>
        {streak >= 7 ? 'trophy' : 'local_fire_department'}
      </span>
      {streak} {label}
    </div>
  );
}
