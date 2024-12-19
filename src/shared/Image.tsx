import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps extends LazyLoadImageProps {
  alt: string;
  src: string;
}

const Image = ({ alt, src, className, ...rest }: ImageProps) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    className={`delay-[200ms] ${className || ""}`}
    {...rest}
  />
);

export default Image;
