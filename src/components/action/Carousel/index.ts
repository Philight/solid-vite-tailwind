import Carousel from "react-slick";
const CarouselContainer =
  typeof window === "undefined" ? Carousel.default : Carousel;

export { default as useCarousel } from "./useCarousel";
export { default as CarouselArrows } from "./CarouselArrows";

// export default Carousel;
// export { CarouselContainer };
export { CarouselContainer as SlickCarousel };
