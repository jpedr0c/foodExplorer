import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import { Container } from "./styles";
import { PlateCard } from "../PlateCard";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export function Dishes({ isAdmin = false, title, dishes }) {
  return(
    <Container>
      <h3>{title}</h3>
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        >
        { dishes &&
          dishes.map(dish => (
            <SwiperSlide
              key={dish.id}
            >
              <PlateCard 
                isAdmin={isAdmin} 
                id={dish.id}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                favorite={dish.isFavorite}
              />
            </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}