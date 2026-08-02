import { LibraryBig } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 text-emerald-600">
      <LibraryBig />
      <span className="text-2xl font-bold tracking-tight text-zinc-900">
        Book<span className="text-emerald-600">Nest</span>
      </span>
    </Link>
  );
}
