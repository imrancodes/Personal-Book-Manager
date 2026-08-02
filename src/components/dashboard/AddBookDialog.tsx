"use client";

import { bookSchema } from "@/src/lib/validations/book";
import { BookFormData } from "@/src/types/book";
import { addBook } from "@/src/utlis/book-utlis";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../common/loader";

interface AddBookDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function AddBookDialog({ open, onClose }: AddBookDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data: BookFormData) => {
    try {
      await addBook(data);
      toast.success("Book added successfully!");
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Failed to add book",
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-md bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <div>
            <h2 className="text-xl font-semibold text-zinc-900">
              Add New Book
            </h2>
          </div>

          <button
            onClick={handleClose}
            className="text-2xl text-zinc-400 transition hover:text-zinc-700 cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-800">
              Title
            </label>

            <input
              {...register("title")}
              type="text"
              placeholder="Atomic Habits"
              className="h-11 w-full rounded-xs border border-zinc-300 px-4 outline-none transition focus:border-emerald-600"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-800">
              Author
            </label>

            <input
              {...register("author")}
              type="text"
              placeholder="James Clear"
              className="h-11 w-full rounded-xs border border-zinc-300 px-4 outline-none transition focus:border-emerald-600"
            />
            {errors.author && (
              <p className="mt-2 text-sm text-red-500">
                {errors.author.message}
              </p>
            )}
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-800">
              Tags
            </label>

            <input
              {...register("tags")}
              type="text"
              placeholder="Self-help, Productivity"
              className="h-11 w-full rounded-xs border border-zinc-300 px-4 outline-none transition focus:border-emerald-600"
            />
            {errors.tags && (
              <p className="mt-2 text-sm text-red-500">{errors.tags.message}</p>
            )}
            <p className="mt-2 text-xs text-zinc-500">
              Separate tags with commas.
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-800">
              Reading Status
            </label>

            <select
              {...register("status")}
              className="h-11 w-full rounded-xs border border-zinc-300 px-4 outline-none transition focus:border-emerald-600"
            >
              <option value="want-to-read">Want to Read</option>
              <option value="reading">Reading</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-xs border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xs bg-emerald-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Loader className="h-5 w-5 fill-white text-emerald-300" />
                  {"Adding"}
                </div>
              ) : (
                "Add Book"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
