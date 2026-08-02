"use client";

import React, { ReactNode, useEffect } from "react";
import { BookOpen, BookMarked, CircleCheckBig, Bookmark } from "lucide-react";
import { getBooks } from "@/src/utlis/book-utlis";

interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: ReactNode;
  iconBg: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon,
  iconBg,
}: StatsCardProps) {
  return (
    <div className="rounded-md border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}
        >
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-medium text-zinc-700">{title}</h3>

          <p className="mt-1 text-4xl font-bold text-zinc-900">{value}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-500">{description}</p>
    </div>
  );
}

interface DashboardStatsProps {
  name: string;
  stats?: {
    total: number;
    reading: number;
    completed: number;
    wantToRead: number;
  };
}

export default function DashboardStats({ name, stats }: DashboardStatsProps) {
  // const [dashboardData, setDashboardData] = React.useState<any>(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getBooks();
  //     setDashboardData(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          Hello, {name || "User"} 👋
        </h1>

        <p className="mt-2 text-lg text-zinc-500">
          Here's your reading collection overview.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Books"
          value={stats?.total || 0}
          description="All books in your collection"
          icon={<BookOpen className="h-7 w-7 text-violet-600" />}
          iconBg="bg-violet-100"
        />

        <StatsCard
          title="Currently Reading"
          value={stats?.reading || 0}
          description="Books you're reading"
          icon={<BookMarked className="h-7 w-7 text-blue-600" />}
          iconBg="bg-blue-100"
        />

        <StatsCard
          title="Completed"
          value={stats?.completed || 0}
          description="Books you've completed"
          icon={<CircleCheckBig className="h-7 w-7 text-emerald-600" />}
          iconBg="bg-emerald-100"
        />

        <StatsCard
          title="Want to Read"
          value={stats?.wantToRead || 0}
          description="Books on your reading list"
          icon={<Bookmark className="h-7 w-7 text-amber-600" />}
          iconBg="bg-amber-100"
        />
      </div>
    </section>
  );
}
