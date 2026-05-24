import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuPageClient from "../components/MenuPageClient";
import { MENU_ITEMS } from "../lib/menu-data";

export const metadata: Metadata = {
  title: "Menu — Brew & Co.",
  description:
    "Browse our full menu of specialty espresso drinks, cold brews, fresh pastries, and light lunches.",
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <div className="bg-cream-100 py-12 px-6 lg:px-24 border-b border-cream-300">
          <div className="max-w-[1280px] mx-auto">
            <span className="text-label font-semibold tracking-widest uppercase text-terracotta-500">
              Brew & Co.
            </span>
            <h1 className="text-display-xl font-extrabold text-brown-900 mt-2 mb-3">
              Our Menu
            </h1>
            <p className="text-body-lg text-brown-600 max-w-[38rem]">
              Crafted with care. Order at the counter or grab a seat — we&apos;ll
              bring it to you.
            </p>
          </div>
        </div>

        {/* Menu grid with category tabs */}
        <MenuPageClient items={MENU_ITEMS} />
      </main>
      <Footer />
    </>
  );
}
