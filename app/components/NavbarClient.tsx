"use client";

import { useState } from "react";
import Link from "next/link";
import ReserveModal from "./ReserveModal";

export default function NavbarClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop reserve button */}
      <div className="hidden md:flex items-center ml-auto">
        <button
          onClick={() => setModalOpen(true)}
          className="h-10 px-5 rounded-pill bg-brown-950 text-white text-body-sm font-semibold
                     hover:bg-brown-800 transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
        >
          Reserve a Table
        </button>
      </div>

      {/* Mobile: hamburger + reserve button */}
      <div className="flex items-center gap-3 ml-auto md:hidden">
        <button
          onClick={() => setModalOpen(true)}
          className="h-9 px-4 rounded-pill bg-brown-950 text-white text-label font-semibold
                     hover:bg-brown-800 transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
        >
          Reserve
        </button>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="size-9 flex flex-col items-center justify-center gap-1.5
                     rounded-md text-brown-600 hover:text-brown-900
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-200 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream-100 border-b border-cream-300 py-4 px-6 flex flex-col gap-2 md:hidden z-[30]">
          <Link
            href="/menu"
            onClick={() => setMobileOpen(false)}
            className="h-10 flex items-center text-body-md font-medium text-brown-600 hover:text-brown-900 transition-colors duration-150"
          >
            Menu
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="h-10 flex items-center text-body-md font-medium text-brown-600 hover:text-brown-900 transition-colors duration-150"
          >
            About Us
          </Link>
        </div>
      )}

      {modalOpen && <ReserveModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
