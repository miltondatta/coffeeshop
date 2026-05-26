import Image from "next/image";
import { PEXELS } from "@/app/lib/pexels-images";
import HeroCTAButtons from "./HeroCTAButtons";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={PEXELS.hero}
        alt="Warm interior of Brew & Co. coffee shop in Brooklyn"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown-950/85 via-brown-950/60 to-brown-950/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-24 py-20">
        <div>
          <span className="inline-block mb-5 text-label font-semibold tracking-widest uppercase text-terracotta-300">
            Brooklyn, NY — Est. 2018
          </span>

          <h1 className="text-display-2xl leading-tight font-extrabold text-white mb-6 whitespace-nowrap">
            Where <span className="text-terracotta-300 italic">Every Cup</span> Tells a Story
          </h1>

          <p className="text-body-lg text-cream-200 leading-normal mb-10 max-w-[38rem]">
            Specialty single-origin coffee, warm pastries straight from the oven, and a
            community that feels like home. Find us on Atlantic Ave in the heart of Brooklyn.
          </p>

          <HeroCTAButtons />
        </div>
      </div>
    </section>
  );
}
