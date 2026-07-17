"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CarouselProps } from "@/lib/types";
import { normalizePictures } from "./normalize";
import { NavigationButtons, Dots } from "./navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

function EmptyState({ className }: { className?: string }) {
  const t = useTranslations("Carousel");
  return (
    <section
      className={`flex min-h-72 items-center justify-center rounded-4xl bg-slate-50 p-8 text-sm font-medium text-slate-500 ${className}`}
      aria-label="Empty carousel">
      {t("emptyState")}
    </section>
  );
}

export default function Carousel({ album, className = "" }: CarouselProps) {
  const pictures = useMemo(() => normalizePictures(album), [album]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (pictures.length === 0) {
    return <EmptyState className={className} />;
  }

  const activePicture = pictures[activeIndex];
  const hasMultiplePictures = pictures.length > 1;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? pictures.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === pictures.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      className={`relative overflow-hidden rounded-4xl bg-slate-950 text-white shadow-2xl shadow-slate-900/20 ${className}`}
      aria-roledescription="carousel"
      aria-label="Image carousel">
      <Link href={`product/${activePicture.product_id}`}>
        <div className="relative min-h-88 sm:min-h-112">
          <Image
            loading="lazy"
            height={1080}
            width={1080}
            src={activePicture.image_url}
            alt={activePicture.title ?? activePicture.title ?? "Carousel image"}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

          {(activePicture.title || activePicture.product_type) && (
            <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10">
              {activePicture.title && (
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                  {activePicture.title}
                </h2>
              )}
              {activePicture.product_type && (
                <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
                  {activePicture.product_type}
                </p>
              )}
            </div>
          )}
        </div>
      </Link>

      {hasMultiplePictures && (
        <>
          <NavigationButtons onPrev={goToPrevious} onNext={goToNext} />
          <Dots
            pictures={pictures}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </>
      )}
    </section>
  );
}
