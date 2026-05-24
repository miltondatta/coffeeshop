import Image from "next/image";
import type { EventItem } from "@/app/lib/events-data";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article
      className="rounded-lg overflow-hidden bg-white shadow-warm-sm
                 hover:shadow-warm-md transition-shadow duration-200"
    >
      <div className="relative h-44 w-full">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-brown-950/40" />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-pill bg-terracotta-100 text-terracotta-700 text-label font-semibold">
          {event.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-display-sm font-bold text-brown-900">
          {event.title}
        </h3>
        <p className="text-body-sm text-brown-600 mt-2 leading-normal line-clamp-2">
          {event.description}
        </p>
        <div className="flex items-center gap-2 mt-4 text-body-sm text-brown-600 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-terracotta-500 shrink-0"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <span>{event.date}</span>
          <span className="text-brown-300">·</span>
          <span>{event.time}</span>
        </div>
      </div>
    </article>
  );
}
