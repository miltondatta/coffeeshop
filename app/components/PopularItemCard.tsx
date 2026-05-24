import Image from "next/image";

interface Props {
  name: string;
  price: number;
  imageUrl: string;
  circleBg: string;
}

export default function PopularItemCard({
  name,
  price,
  imageUrl,
  circleBg,
}: Props) {
  return (
    <article
      className="flex items-center gap-5 p-5 rounded-lg bg-cream-50
                 hover:shadow-warm-md hover:-translate-y-0.5
                 transition-all duration-200 cursor-default"
    >
      <div
        className={`relative shrink-0 size-24 rounded-full overflow-hidden ${circleBg}`}
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-contain p-2"
          sizes="96px"
        />
      </div>
      <div>
        <h3 className="text-display-sm font-bold text-brown-900 leading-snug">
          {name}
        </h3>
        <p className="text-body-lg font-bold text-terracotta-500 mt-1">
          ${price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
