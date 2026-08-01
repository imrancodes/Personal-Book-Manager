import { LibraryBig } from "lucide-react";
import Link from "next/link";

const productLinks = [
  {
    label: "Features",
    href: "#",
  },
  {
    label: "How it Works",
    href: "#",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const resourceLinks = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 text-emerald-600">
              <LibraryBig />
              <span className="text-2xl font-bold tracking-tight text-zinc-900">
                Book<span className="text-emerald-600">Nest</span>
              </span>
            </Link>

            <p className="mt-5 text-base leading-6 text-zinc-600 flex flex-col">
              <span>Manage Your Books.</span>
              <span>Build your reading habit.</span>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-emerald-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-emerald-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-emerald-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="https://x.com/imran1seven" target="_blank" className="transition hover:text-emerald-600">
              Twitter
            </Link>

            <Link href="https://github.com/imrancodes" target="_blank" className="transition hover:text-emerald-600">
              GitHub
            </Link>

            <Link href="https://www.linkedin.com/in/imran17" target="_blank" className="transition hover:text-emerald-600">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
