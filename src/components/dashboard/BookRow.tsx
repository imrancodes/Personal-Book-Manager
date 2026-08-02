import { Book, BookFormData } from "@/src/types/book";
import { Pencil, Trash2 } from "lucide-react";

interface BookRowProps {
  book: Book;
  onEdit?: (book: Book) => void;
  onDelete?: (id: string) => void;
}

export default function BookRow({ book, onEdit, onDelete }: BookRowProps) {
  const statusStyles = {
    reading: "bg-blue-100 text-blue-700",
    completed: "bg-emerald-100 text-emerald-700",
    "want-to-read": "bg-amber-100 text-amber-700",
  };

  return (
    <tr className="border-b border-zinc-100 last:border-none">
      <td className="px-6 py-5 font-medium text-zinc-900">{book.title}</td>

      <td className="px-6 py-5 text-zinc-600">{book.author}</td>

      <td className="px-6 py-5">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
            statusStyles[book.status]
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          {book.status === "want-to-read"
            ? "Want to Read"
            : book.status === "completed"
              ? "Completed"
              : "Reading"}
        </span>
      </td>

      <td className="px-6 py-5">
        {book.tags.length ? (
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-50 px-3 py-1 text-xs text-violet-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-lg font-bold text-zinc-500 pl-8">--</span>
        )}
      </td>

      <td className="px-6 py-5">
        <div className="flex justify-end gap-2">
          <button onClick={() => {
            onEdit?.(book);
            console.log(book.tags);
          }} className="rounded-xs border border-zinc-300 p-2 transition hover:bg-zinc-100 cursor-pointer">
            <Pencil size={16} />
          </button>

          <button onClick={() => onDelete?.(book._id)} className="rounded-xs border border-red-200 p-2 text-red-600 transition hover:bg-red-50 cursor-pointer">
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
