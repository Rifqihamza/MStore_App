import usePreventBackNavigation from "../../hooks/usePreventNavigation";
import NavigateBar from "../../components/navbar";
import { itemSlider } from "../../variables/itemsSlider";

// Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required Swiper modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const HomePage = () => {
  usePreventBackNavigation();
  return (
    <>
      <NavigateBar />
      <section id="heroSection">
        {/* Desktop View */}
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full">
          <div
            id="heroDesktop"
            className="hidden sm:flex flex-row gap-10 items-center justify-between mx-[6rem]"
          >
            <div id="titleHero" className="text-white whitespace-normal">
              <h1 className="sm:text-4xl text-xl font-bold text-left">
                Welcome to Mitra Store!
              </h1>
              <p className="sm:text-xl text-md">
                Tempat Berbelanja Aksesoris dan Seragam Sekolah
              </p>
            </div>
            <div id="swiperDesktop" className="sm:w-1/2 w-full">
              <Swiper
                effect={"coverflow"}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={-280}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 500,
                  modifier: 1,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="swiper_container MyGradient"
              >
                {itemSlider.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="border border-white/60 sm:w-[300px] sm:h-[350px] w-[250px] h-[350px] p-8 mx-auto flex flex-col justify-between rounded-xl">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className="mx-auto aspect-4/3 object-contain rounded-lg w-44"
                      />
                      <div className="text-center p-4">
                        <p className="text-white text-center text-xl font-semibold p-4">
                          {item.name}
                        </p>
                        <button className="text-white border px-3 py-2 rounded-lg hover:bg-white hover:text-black duration-300">
                          Check Now!
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="custom-pagination mt-10"></div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* Mobile View */}
        <div
          id="heroMobile"
          className="flex flex-col sm:hidden gap-10 items-center justify-between translate-y-[6rem] mx-[2rem]"
        >
          <div id="titleHero" className="text-white text-center">
            <h1 className="text-xl font-bold">Welcome to Mitra Store!</h1>
            <p className="text-md">
              Tempat Berbelanja Aksesoris dan Seragam Sekolah
            </p>
          </div>
          <div id="swiperMobile" className="w-full">
            <Swiper
              effect={"coverflow"}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              centeredSlides={true}
              loop={true}
              slidesPerView={"1"}
              spaceBetween={-60} // Adjusted for mobile spacing
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="swiper_container MyGradient"
            >
              {itemSlider.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="border-2 border-white/60 w-[250px] h-[350px] p-6 mx-auto flex flex-col justify-between rounded-xl">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="mx-auto aspect-4/3 object-contain rounded-lg w-36"
                    />
                    <div className="text-center p-4">
                      <p className="text-white text-center text-xl font-semibold p-4">
                        {item.name}
                      </p>
                      <button className="text-white border px-3 py-2 rounded-lg hover:bg-white hover:text-black duration-300">
                        Check Now!
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="custom-pagination mt-10"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
