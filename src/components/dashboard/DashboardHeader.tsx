"use client";

import { useState } from "react";
import { LogOut, Plus } from "lucide-react";
import AddBookDialog from "./AddBookDialog";
import Logo from "../common/Logo";
import { logout } from "@/src/utlis/user-utlis";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LibraryBig } from "lucide-react";

interface DashboardHeaderProps {
  fetchData: () => Promise<void>;
  onAddBook: () => void;
}

export default function DashboardHeader({
  fetchData,
  onAddBook,
}: DashboardHeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully.");
      router.replace("/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Logout failed");
    }
  };

  return (
    <>
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-1 text-emerald-600">
            <LibraryBig />
            <span className="text-2xl font-bold tracking-tight text-zinc-900">
              Book<span className="text-emerald-600">Nest</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onAddBook}
              className="flex h-11 items-center gap-2 rounded-xs bg-emerald-600 px-5 font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
            >
              <Plus size={18} />
              Add Book
            </button>

            <button
              onClick={handleLogout}
              className="flex h-11 items-center gap-2 rounded-xs border border-zinc-300 px-5 font-medium text-zinc-700 transition hover:bg-zinc-100 cursor-pointer"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
