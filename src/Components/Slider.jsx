import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
const logos = [
  "Assets/leaf-50.png",
  "Assets/fox-hub-50.png",
  "Assets/lighting-50.png",
  "Assets/towers-50.png",
  "Assets/treva-50.png",
  "Assets/volicity9-50.png",
];
const Slider = () => {
  return (
    <Box sx={{ backgroundColor: "#0B1121", padding: "90px 0" }}>
      <Typography
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        sx={{
          textAlign: "center",
          color: "white",
          marginBottom: "50px",
          fontSize: ["25px", "1.5rem", "2rem"],
        }}
      >
        TRUSTED BY
      </Typography>

      <Swiper
        navigation
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={index * 200}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
                opacity: 0.8,
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  filter: "grayscale(100%)",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
