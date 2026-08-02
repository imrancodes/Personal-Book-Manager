"use client";

import { Book } from "@/src/types/book";
import BookRow from "./BookRow";

interface BookTableProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

export default function BookTable({ books, onEdit, onDelete }: BookTableProps) {
  return (
    <section className="mt-8 max-h-[400px] overflow-auto rounded-md border border-zinc-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700">
              Title
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700">
              Author
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-700">
              Tags
            </th>

            <th className="px-6 py-4 text-right text-sm font-semibold text-zinc-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <BookRow
              key={book._id}
              book={book}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
