import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularItemCard from "./components/PopularItemCard";
import EventCard from "./components/EventCard";
import Footer from "./components/Footer";
import { PEXELS } from "./lib/pexels-images";
import { EVENTS } from "./lib/events-data";

export const metadata: Metadata = {
  title: "Brew & Co. — Brooklyn Coffee Shop",
};

const POPULAR_ITEMS = [
  {
    name: "Cappuccino",
    price: 5.25,
    imageUrl: PEXELS.cappuccino,
    circleBg: "bg-spotlight-nutella",
  },
  {
    name: "Flat White",
    price: 5.5,
    imageUrl: PEXELS.flatWhite,
    circleBg: "bg-spotlight-caramel",
  },
  {
    name: "Latte",
    price: 5.75,
    imageUrl: PEXELS.latte,
    circleBg: "bg-amber-warm-500",
  },
  {
    name: "Mocha",
    price: 6.25,
    imageUrl: PEXELS.mocha,
    circleBg: "bg-terracotta-300",
  },
  {
    name: "Caramel Latte",
    price: 6.5,
    imageUrl: PEXELS.caramelLatte,
    circleBg: "bg-amber-warm-400",
  },
  {
    name: "Cold Brew",
    price: 5.5,
    imageUrl: PEXELS.coldBrew,
    circleBg: "bg-spotlight-hero",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Our Favourites */}
        <section className="bg-cream-200 py-20 px-6 lg:px-24">
          <div className="max-w-[1280px] mx-auto">
            <span className="text-label font-semibold tracking-widest uppercase text-terracotta-500">
              Most Loved
            </span>
            <h2 className="text-display-lg font-bold text-brown-900 mt-2 mb-3">
              Our Favourites
            </h2>
            <p className="text-body-lg text-brown-600 mb-10 max-w-[42rem]">
              The drinks our regulars keep coming back for, day after day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {POPULAR_ITEMS.map((item) => (
                <PopularItemCard key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="bg-cream-100 py-20 px-6 lg:px-24">
          <div className="max-w-[1280px] mx-auto">
            <span className="text-label font-semibold tracking-widest uppercase text-terracotta-500">
              Community
            </span>
            <h2 className="text-display-lg font-bold text-brown-900 mt-2 mb-3">
              Upcoming Events
            </h2>
            <p className="text-body-lg text-brown-600 mb-10 max-w-[42rem]">
              Live music on Fridays. Coffee tastings on Saturdays. Always a
              reason to come back.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Visit us CTA */}
        <section className="bg-brown-950 py-20 px-6 lg:px-24 text-center">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-display-lg font-extrabold text-white mb-4">
              Come Find Us in Brooklyn
            </h2>
            <p className="text-body-lg text-cream-300 mb-2">
              123 Atlantic Ave, Brooklyn, NY 11201
            </p>
            <p className="text-body-md text-brown-400 mb-10">
              Mon–Fri 7am–7pm · Sat–Sun 8am–6pm
            </p>
            <a
              href="https://maps.google.com/?q=123+Atlantic+Ave+Brooklyn+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-8 rounded-pill border-2 border-cream-300
                         text-cream-100 font-semibold text-body-md
                         hover:bg-cream-100 hover:text-brown-950
                         transition-all duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-950"
            >
              Get Directions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
