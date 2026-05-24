export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  tag: string;
  imageUrl: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "open-mic-may-15",
    title: "Open Mic Night",
    description:
      "Brooklyn's best emerging artists take the mic. Grab a drink and settle in.",
    date: "Friday, May 15",
    time: "7:00 PM",
    tag: "Every Friday",
    imageUrl: "/images/event-open-mic-1.jpg",
  },
  {
    id: "coffee-tasting-may-16",
    title: "Coffee Tasting",
    description:
      "Explore single-origin beans from Ethiopia, Colombia & Guatemala with our head roaster.",
    date: "Saturday, May 16",
    time: "10:00 AM",
    tag: "Every Saturday",
    imageUrl: "/images/event-coffee-tasting-1.jpg",
  },
  {
    id: "open-mic-may-22",
    title: "Open Mic Night",
    description:
      "Poetry, song, and storytelling. All are welcome to perform or just listen.",
    date: "Friday, May 22",
    time: "7:00 PM",
    tag: "Every Friday",
    imageUrl: "/images/event-open-mic-2.jpg",
  },
  {
    id: "coffee-tasting-may-23",
    title: "Coffee Tasting",
    description:
      "A guided flight of seasonal coffees paired with house-made pastries.",
    date: "Saturday, May 23",
    time: "10:00 AM",
    tag: "Every Saturday",
    imageUrl: "/images/event-coffee-tasting-2.jpg",
  },
];
