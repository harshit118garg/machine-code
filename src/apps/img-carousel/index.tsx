import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";
import { IMAGES } from "./constants/imgCarouselConstants";
import "./styles/index.scss";

export default function ImgCarousel() {
  const [imgIdx, setImgIdx] = useState<number>(0);

  const showNext = () => {
    setImgIdx((imgIdx + 1) % IMAGES.length);
  };

  const showPrev = () => {
    setImgIdx((imgIdx - 1 + IMAGES.length) % IMAGES.length);
  };

  const translateValue = `translateX(${-100 * imgIdx}%)`;

  return (
    <>
      <div className="carousel-container">
        <div className="top-bar">
          <h2>Image Carousel</h2>
        </div>
        <div className="carousel">
          <div className="images-slider">
            {IMAGES.map((image, index) => {
              return (
                <img
                  src={image}
                  key={image}
                  alt={`Image ${index + 1}`}
                  style={{ transform: translateValue }}
                />
              );
            })}
          </div>
          <button className="img-btn" onClick={showPrev} style={{ left: 0 }}>
            <ArrowBigLeft />
          </button>
          <button className="img-btn" onClick={showNext} style={{ right: 0 }}>
            <ArrowBigRight />
          </button>
          <div className="bottom-dots">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                className="img-dot-btn"
                onClick={() => setImgIdx(index)}
              >
                {index === imgIdx ? <CircleDot /> : <Circle />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
