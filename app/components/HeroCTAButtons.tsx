"use client";

import { useState } from "react";
import Link from "next/link";
import ReserveModal from "./ReserveModal";

export default function HeroCTAButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/menu"
          className="inline-flex items-center h-12 px-7 rounded-pill border-2 border-white
                     text-white font-semibold text-body-md
                     hover:bg-white hover:text-brown-900
                     transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
        >
          View Menu
        </Link>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center h-12 px-7 rounded-pill bg-white text-brown-950 font-semibold text-body-md
                     hover:bg-cream-100
                     transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500"
        >
          Reserve a Table
        </button>
      </div>
      {modalOpen && <ReserveModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
