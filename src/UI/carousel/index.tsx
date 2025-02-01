import { useEffect, useState } from "react";
import { CAROUSELPROPTYPES } from "../../global/definations/types";
import { Container, Icon } from "../../shared";
import "./style.css";

const Carousel = ({
  slides,
  autoplay = false,
  vertical = false,
}: CAROUSELPROPTYPES) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const previous = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      next();
    }, 1000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const translateValue = vertical
    ? `translateY(${-100 * activeSlide}%)`
    : `translateX(${-100 * activeSlide}%)`;

  return (
    <Container componentName="Image Slider">
      <div
        className={`slider relative ${
          vertical ? "verticle-slider" : "horizontal-slider"
        }`}
      >
        <div className={`image-slider flex max-h-[40rem] max-w-full`}>
          {slides.map((slide) => {
            return (
              <img
                className="object-cover h-full w-full block transition-[transform] ease-in-out duration-300"
                src={slide.url}
                key={slide.id}
                alt={slide.altText}
                style={{ transform: translateValue }}
              />
            );
          })}
        </div>
        <div className="arrows absolute inset-0 flex justify-between px-4 items-center h-full">
          <button
            className="p-2 rounded hover:bg-slate-100 transition-all ease-in-out duration-200"
            onClick={previous}
          >
            <Icon name={vertical ? "move-up" : "move-left"} />
          </button>
          <button
            className="p-2 rounded hover:bg-slate-100 transition-all ease-in-out duration-200"
            onClick={next}
          >
            <Icon name={vertical ? "move-down" : "move-right"} />
          </button>
        </div>
        <div
          className={`dots w-full absolute flex justify-center items-center`}
        >
          {slides.map((_slide, _i) => {
            return (
              <button
                key={_slide.id}
                className="text-black transition hover:scale-125"
                onClick={() => setActiveSlide(_i)}
              >
                <Icon name={activeSlide === _i ? "circle-dot" : "circle"} />
              </button>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
