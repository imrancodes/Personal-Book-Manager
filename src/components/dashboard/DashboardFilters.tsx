"use client";

import { Search } from "lucide-react";
import { SearchX } from "lucide-react";

interface DashboardFiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

interface NoResultsProps {
  onClear: () => void;
}

export function NoResults({
  onClear,
}: NoResultsProps) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center rounded-md border border-zinc-200 bg-white py-20">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100">
        <SearchX className="h-10 w-10 text-zinc-400" />
      </div>

      <h2 className="mt-6 text-2xl font-semibold text-zinc-900">
        No results found
      </h2>

      <p className="mt-2 max-w-md text-center text-zinc-500">
        We couldn't find any books matching your search or selected filters.
      </p>

      <button
        onClick={onClear}
        className="mt-6 rounded-xs bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default function DashboardFilters({
  search,
  setSearch,
  status,
  setStatus
}: DashboardFiltersProps) {
  return (
    <section className="mt-8 rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Status Filter */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Filter by Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-11 w-full rounded-xs border border-zinc-300 px-4 text-zinc-700 outline-none transition focus:border-emerald-600"
          >
            <option value="all">All Status</option>
            <option value="want-to-read">Want to Read</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Search */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-700">
            Search
          </label>

          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Search by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 w-full rounded-xs border border-zinc-300 pl-11 pr-4 text-zinc-700 outline-none transition focus:border-emerald-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}