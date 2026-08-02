import { BookOpen, Plus } from "lucide-react";

interface EmptyStateProps {
  onAddBook: () => void;
}

export default function EmptyState({
  onAddBook,
}: EmptyStateProps) {
  return (
    <div className="mt-8 flex min-h-[420px] flex-col items-center justify-center rounded-md border border-dashed border-zinc-300 bg-white px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
        <BookOpen className="h-10 w-10 text-emerald-600" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-zinc-900">
        No books yet
      </h2>

      <p className="mt-2 max-w-md text-zinc-500">
        Start building your personal reading collection by adding your first
        book.
      </p>

      <button
        onClick={onAddBook}
        className="mt-8 flex items-center gap-2 rounded-xs bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
      >
        <Plus size={18} />
        Add Your First Book
      </button>
    </div>
  );
}