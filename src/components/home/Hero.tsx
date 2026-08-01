import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 via-white to-white" />

      <div className="mx-auto flex flex-col items-center justify-center px-6 pt-20 text-center lg:px-8">

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            Your Personal
            <br />
            <span className="text-emerald-600">Book Manager</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Track what you're reading, organize your personal library, and build
            a better reading habit with a clean and distraction-free experience.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center justify-center">
            <Link
              href="/signup"
              className="rounded-xs bg-emerald-600 px-8 py-3 font-medium text-white transition hover:bg-emerald-700"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="rounded-xs border border-zinc-300 px-8 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Login
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-sm text-zinc-500">
            <div>
              <p className="text-3xl font-bold text-zinc-900">100+</p>
              <p>Books Managed</p>
            </div>

            <div className="h-10 w-px bg-zinc-200" />

            <div>
              <p className="text-3xl font-bold text-zinc-900">3</p>
              <p>Reading Status</p>
            </div>

            <div className="h-10 w-px bg-zinc-200" />

            <div>
              <p className="text-3xl font-bold text-zinc-900">∞</p>
              <p>Reading Journey</p>
            </div>
        </div>
      </div>
    </section>
  );
}
