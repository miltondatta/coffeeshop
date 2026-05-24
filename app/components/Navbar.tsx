import Link from "next/link";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[30] h-[4.5rem] bg-cream-100/95 backdrop-blur-sm border-b border-cream-300 relative">
      <div className="max-w-[1280px] mx-auto h-full flex items-center px-6 lg:px-24 gap-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-terracotta-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h16.5c1.036 0 1.875.84 1.875 1.875V9a6 6 0 0 1-4.5 5.806V19.5h1.5a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1 0-1.5h1.5v-4.694A6 6 0 0 1 2.25 9V4.125Zm4.5 9.844A4.502 4.502 0 0 1 3.75 9V4.125a.375.375 0 0 1 .375-.375h16.5a.375.375 0 0 1 .375.375V9a4.5 4.5 0 0 1-3 4.243V19.5H6.75v-5.531Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-display-sm font-extrabold text-brown-900 tracking-tight">
            Brew & Co.
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="/menu"
            className="text-body-md font-medium text-brown-600 hover:text-brown-900 transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500 rounded-sm"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-body-md font-medium text-brown-600 hover:text-brown-900 transition-colors duration-150
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500 rounded-sm"
          >
            About Us
          </Link>
        </nav>

        {/* Client island: reserve button + mobile hamburger */}
        <NavbarClient />
      </div>
    </header>
  );
}
