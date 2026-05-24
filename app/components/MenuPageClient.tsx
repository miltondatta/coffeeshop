"use client";

import { useState } from "react";
import Image from "next/image";
import type { MenuItem, Category } from "@/app/lib/menu-data";

const CATEGORIES: Category[] = [
  "Espresso",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-terracotta-100 text-terracotta-600",
  "House Favorite": "bg-amber-warm-200 text-amber-warm-700",
  "Staff Pick": "bg-brown-100 text-brown-700",
  New: "bg-cream-300 text-brown-700",
  Seasonal: "bg-terracotta-100 text-terracotta-700",
  Vegan: "bg-category-drinks/10 text-category-drinks",
};

const CATEGORY_ICONS: Record<Category, string> = {
  Espresso: "☕",
  "Cold Drinks": "🧊",
  Pastries: "🥐",
  Sandwiches: "🥪",
};

function MenuItemCard({ item }: { item: MenuItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="bg-white rounded-lg overflow-hidden shadow-warm-sm
                 hover:shadow-warm-md hover:-translate-y-0.5
                 transition-all duration-200"
    >
      <div className="relative h-48 w-full bg-cream-200">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {item.badge && (
          <span
            className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-sm text-label font-semibold ${
              BADGE_STYLES[item.badge] ?? "bg-cream-300 text-brown-600"
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-body-md font-bold text-brown-900 leading-snug">
          {item.name}
        </h3>
        <p
          className={`text-body-sm text-brown-500 mt-1.5 leading-normal ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {item.description}
        </p>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-1 text-label font-semibold text-terracotta-500
                     hover:text-terracotta-700 transition-colors duration-150
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-terracotta-500 focus-visible:ring-offset-1 rounded-sm"
        >
          {expanded ? "less" : "more"}
        </button>
        <p className="text-body-lg font-bold text-terracotta-500 mt-3">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}

export default function MenuPageClient({ items }: { items: MenuItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("Espresso");

  const filtered = items.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-cream-200 min-h-screen py-10 px-6 lg:px-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Category tabs */}
        <div
          className="flex gap-2 flex-wrap mb-10"
          role="tablist"
          aria-label="Menu categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                "inline-flex items-center gap-2 h-11 px-5 rounded-pill font-medium text-body-md",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-terracotta-500",
                activeCategory === cat
                  ? "bg-brown-950 text-white shadow-warm-sm"
                  : "bg-white text-brown-600 border border-cream-300 hover:border-brown-300 hover:text-brown-900",
              ].join(" ")}
            >
              <span aria-hidden="true">{CATEGORY_ICONS[cat]}</span>
              {cat}
            </button>
          ))}
        </div>

        {/* Item count */}
        <p className="text-body-sm text-brown-600 mb-6 font-medium">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""} in{" "}
          {activeCategory}
        </p>

        {/* Item grid */}
        <div
          role="tabpanel"
          aria-label={`${activeCategory} items`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
