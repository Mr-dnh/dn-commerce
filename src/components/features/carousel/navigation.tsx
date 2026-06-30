import { CarouselPicture } from "@/lib/types";

type NavigationButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
};

type DotsProps = {
  pictures: CarouselPicture[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

export function NavigationButtons({ onPrev, onNext }: NavigationButtonsProps) {
  return (
    <>
      <button
        className="absolute left-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-950 shadow-lg transition hover:bg-white focus:outline-none active:ring-2 active:ring-white/70"
        aria-label="Previous carousel image"
        onClick={onPrev}>
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-950 shadow-lg transition hover:bg-white focus:outline-none active:ring-2 active:ring-white/70"
        aria-label="Next carousel image"
        onClick={onNext}>
        ›
      </button>
    </>
  );
}

export function Dots({ pictures, activeIndex, onSelect }: DotsProps) {
  return (
    <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-slate-950/45 px-2 py-1">
      {pictures.map((picture, index) => (
        <button
          key={`${picture.src}-${index}`}
          className={`size-1.5 rounded-full transition ${
            index === activeIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
          }`}
          aria-label={`Show carousel image ${index + 1}`}
          aria-current={index === activeIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
