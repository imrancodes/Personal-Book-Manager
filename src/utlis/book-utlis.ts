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