import { FC } from "react";
import { Box } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type CarouselProps = {
  images: string[];
};

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel: FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        //@ts-ignore
        "--swiper-theme-color":"#DA5552",
      }}
    >
      {images.map((url, index) => (
        <SwiperSlide key={url}>
          <Box
            key={index}
            backgroundPosition="center"
            height="100%"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            maxW="100%"
            borderRadius={25}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
