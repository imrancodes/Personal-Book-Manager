import Logo from "../common/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-xs border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 md:block"
          >
            Log in
          </Link>

          <Link
            href="/signup"
            className="rounded-xs bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
