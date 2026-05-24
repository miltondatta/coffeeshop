import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PEXELS } from "../lib/pexels-images";

export const metadata: Metadata = {
  title: "About Us — Brew & Co.",
  description:
    "Meet the founders of Brew & Co. and learn the story behind Brooklyn's favourite neighbourhood coffee shop.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <Image
            src={PEXELS.aboutInterior}
            alt="Inside Brew & Co. coffee shop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brown-950/55" />
          <div className="absolute inset-0 flex items-center px-6 lg:px-24">
            <div className="max-w-[1280px] mx-auto w-full">
              <span className="text-label font-semibold tracking-widest uppercase text-terracotta-300 block mb-4">
                Est. 2018 · Brooklyn, NY
              </span>
              <h1 className="text-display-xl font-extrabold text-white leading-tight">
                Our Story
              </h1>
              <p className="text-body-lg text-cream-200 mt-4 max-w-[38rem] leading-normal">
                A Brooklyn café built on craft, community, and an obsession
                with the perfect cup.
              </p>
            </div>
          </div>
        </section>

        {/* Founding story */}
        <section className="bg-cream-100 py-20 px-6 lg:px-24">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-label font-semibold tracking-widest uppercase text-terracotta-500">
                The Founders
              </span>
              <h2 className="text-display-lg font-bold text-brown-900 mt-3 mb-7">
                Priya & Liam Okafor
              </h2>
              <div className="space-y-5 text-body-md text-brown-600 leading-normal max-w-[42rem]">
                <p>
                  Priya and Liam met in 2016 at a specialty coffee roasting
                  intensive in Portland, Oregon — two strangers who quickly
                  bonded over a shared belief that great coffee has the power
                  to change how you experience a place.
                </p>
                <p>
                  After two years perfecting their craft — sourcing direct-trade
                  beans from small farms in Ethiopia, Colombia, and Guatemala,
                  mastering the espresso dial, and building relationships with
                  farmers on the ground — they packed up and moved to Brooklyn
                  with a dream and a hand-built espresso cart.
                </p>
                <p>
                  Brew & Co. opened its doors on Atlantic Avenue in the spring
                  of 2018. What started as a tiny 12-seat café has grown into a
                  neighbourhood anchor: part coffee bar, part community living
                  room, part open-mic stage. The espresso cart still lives in
                  the corner.
                </p>
                <p>
                  Today, Priya leads the sourcing and roasting programme while
                  Liam runs the kitchen and events. Together, they&apos;ve
                  built the place they always wished existed in their
                  neighbourhood.
                </p>
              </div>
            </div>
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src={PEXELS.founders}
                alt="Priya and Liam Okafor, founders of Brew & Co."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* What we stand for */}
        <section className="bg-cream-200 py-20 px-6 lg:px-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <span className="text-label font-semibold tracking-widest uppercase text-terracotta-500">
                Our Values
              </span>
              <h2 className="text-display-lg font-bold text-brown-900 mt-3">
                What We Stand For
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  description:
                    "Single-origin beans sourced direct from farmers we know by name. Every cup is pulled to order — no compromises, no shortcuts.",
                  detail:
                    "We rotate seasonal lots year-round and publish full tasting notes for every coffee we serve.",
                },
                {
                  title: "Community",
                  description:
                    "Live events, local art on the walls, and a table that's always open. We built this place for the neighbourhood, and the neighbourhood is what keeps it alive.",
                  detail:
                    "Open mic nights every Friday. Coffee tastings every Saturday. Everyone is welcome — performer or wallflower.",
                },
                {
                  title: "Sustainability",
                  description:
                    "Compostable packaging, zero food waste, and a firm commitment to fair-trade sourcing across every product we stock.",
                  detail:
                    "Leftover pastries go to a local shelter each evening. Coffee grounds go to community gardens.",
                },
              ].map((value, i) => (
                <div
                  key={value.title}
                  className="bg-white rounded-lg p-8 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-200"
                >
                  <div
                    className={[
                      "size-12 rounded-full flex items-center justify-center mb-5 text-xl",
                      i === 0
                        ? "bg-spotlight-nutella"
                        : i === 1
                          ? "bg-spotlight-caramel"
                          : "bg-category-drinks",
                    ].join(" ")}
                  >
                    {i === 0 ? "☕" : i === 1 ? "🤝" : "🌿"}
                  </div>
                  <h3 className="text-display-sm font-bold text-brown-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-brown-600 leading-normal mb-3">
                    {value.description}
                  </p>
                  <p className="text-body-sm text-brown-400 leading-normal">
                    {value.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-brown-950 py-20 px-6 lg:px-24">
          <div className="max-w-[1280px] mx-auto text-center">
            <blockquote className="text-display-md font-semibold text-cream-100 leading-snug max-w-2xl mx-auto">
              &ldquo;We didn&apos;t open a coffee shop. We opened a place
              where Atlantic Avenue feels a little smaller.&rdquo;
            </blockquote>
            <cite className="block mt-6 text-body-sm text-brown-400 not-italic">
              — Priya Okafor, co-founder
            </cite>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
