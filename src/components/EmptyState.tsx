interface EmptyStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = "No products found",
  message = "Try changing your filters or search.",
  actionLabel = "Clear Filters",
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-20 px-6">
      <span className="text-4xl" aria-hidden="true">
        🪷
      </span>
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <p className="text-ink-soft max-w-sm">{message}</p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-ink px-6 py-2.5 text-sm font-medium hover:bg-ink hover:text-ivory transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
