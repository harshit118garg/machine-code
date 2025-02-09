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
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlide, autoplay]);

  return (
    <Container componentName="Image Slider">
      <div
        className={`slider ${
          vertical ? "vertical-slider" : "horizontal-slider"
        } relative overflow-hidden`}
      >
        <div
          className="image-slider flex transition-transform ease-in-out duration-500"
          style={{
            transform: vertical
              ? `translateY(${-100 * activeSlide}%)`
              : `translateX(${-100 * activeSlide}%)`,
          }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.url}
              alt={slide.altText}
              className="object-cover w-full h-full"
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows absolute inset-0 flex justify-between px-4 items-center h-full">
          <button className="arrow-btn" onClick={previous}>
            <Icon name={vertical ? "move-up" : "move-left"} />
          </button>
          <button className="arrow-btn" onClick={next}>
            <Icon name={vertical ? "move-down" : "move-right"} />
          </button>
        </div>

        {/* Dots */}
        <div className="dots absolute">
          {slides.map((_slide, _i) => (
            <button
              key={_slide.id}
              className={`dot ${activeSlide === _i ? "active" : ""}`}
              onClick={() => setActiveSlide(_i)}
            >
              <Icon name={activeSlide === _i ? "circle-dot" : "circle"} />
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
