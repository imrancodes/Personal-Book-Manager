import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 overflow-hidden rounded-[32px] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 px-8 py-10 shadow-sm lg:grid-cols-2 lg:px-16 lg:py-14">
          <div className="flex items-center justify-center">
            <div className="flex h-72 items-center justify-center rounded-3xl">
                <Image
                  src="/book-illustration.webp"
                  alt="Illustration"
                  width={300}
                  height={200}
                />
            </div>
          </div>

          <div className="max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              Ready to organize your
              <br />
              reading journey?
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Build your personal reading library with BookNest. Track every book, organize your collection, monitor your reading progress, and never lose sight of your next great read.
            </p>

            <Link
              href="/signup"
              className="mt-8 inline-flex items-center rounded-xs bg-emerald-600 px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-emerald-700"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}