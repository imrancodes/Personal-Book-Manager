"use client";

import { useEffect, useState } from "react";
import BookTable from "./BookTable";
import DashboardFilters, { NoResults } from "./DashboardFilters";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import { deleteBook, getBooks } from "@/src/utlis/book-utlis";
import { Book } from "@/src/types/book";
import AddBookDialog from "./AddBookDialog";
import toast from "react-hot-toast";
import EmptyState from "./EmptyState";

export interface DashboardData {
  user: {
    name: string;
  };
  books: Book[];
  stats: {
    total: number;
    reading: number;
    completed: number;
    wantToRead: number;
  };
}

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const fetchData = async () => {
    const data = await getBooks();
    setDashboardData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setOpenEdit(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      toast.success("Book deleted successfully.");
      await fetchData();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete book",
      );
    }
  };

  const filteredBooks =
    dashboardData?.books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "all" || book.status === status;

      return matchesSearch && matchesStatus;
    }) ?? [];

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardHeader
        fetchData={fetchData}
        onAddBook={() => setOpenAdd(true)}
      />

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        <DashboardStats
          name={dashboardData?.user.name ?? ""}
          stats={dashboardData?.stats}
        />

        <DashboardFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
        />

        {dashboardData?.books.length === 0 ? (
          <EmptyState onAddBook={() => setOpenAdd(true)} />
        ) : filteredBooks.length === 0 ? (
          <NoResults
            onClear={() => {
              setSearch("");
              setStatus("all");
            }}
          />
        ) : (
          <BookTable
            books={filteredBooks}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>

      {/* For Add Book */}
      <AddBookDialog
        open={openAdd}
        onClose={() => {
          setOpenAdd(false);
        }}
        book={selectedBook}
        onSuccess={fetchData}
      />

      {/* For Edit Book */}
      <AddBookDialog
        open={openEdit}
        onClose={() => {
          setOpenEdit(false);
          setSelectedBook(null);
        }}
        book={selectedBook}
        onSuccess={fetchData}
      />
    </div>
  );
}
