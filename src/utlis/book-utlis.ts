import { BookFormData } from "../types/book";

export type AddBookPayload = {
  title: string;
  author: string;
  tags?: string;
  status: "want-to-read" | "reading" | "completed";
};

export async function addBook(data: AddBookPayload) {
  const response = await fetch("/api/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to add book");
  }

  return result;
}

export async function getBooks() {
  const response = await fetch("/api/books");
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch books");
  }

  return result;
}

export async function updateBook(id: string, data: BookFormData) {
  const response = await fetch(`/api/books/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
}

export async function deleteBook(id: string) {
  const response = await fetch(`/api/books/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to delete book");
  }

  return result;
}