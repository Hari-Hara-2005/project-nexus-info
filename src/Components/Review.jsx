import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import TitleWithDescription from "./TitleWithDescription ";
const reviews = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "@jaredpeters23",
    role: "Business Owner",
    review:
      "Love this theme! Really nice designs and great quality overall. The customer support answered all my questions too 😁",
  },
  {
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "@hfeldadna",
    role: "Developer",
    review: "Amazing template. Amazing support. Highly recommended 😁",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "@jeff275",
    role: "Designer",
    review:
      "Very nice template, very helpful support. Can't wait to get the new site launched. Thank you!",
  },
  {
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "@Ninjapete",
    role: "Creative",
    review:
      "A highly adaptable theme and very responsive, timely and comprehensive support. Thanks guys.",
  },
  {
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "@edzheimer",
    role: "Developer",
    review:
      "Complete theme easy to install, with lots of templates to import. Thank you for the quality of this theme. I am very happy.",
  },
  {
    id: 6,
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "@Mer1iNN",
    role: "Customer",
    review:
      "Awesome theme! Tons of customization, easy management, bunch of templates.",
  },
  {
    id: 7,
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "@sc-marketing",
    role: "Graphic Designer",
    review:
      "This theme is excellent in every manner of speaking. I’ve built a number of websites with it because it’s so easy to work with.",
  },
  {
    id: 8,
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "@Jasonmaar",
    role: "Customer",
    review:
      "Awesome! Webflow quality at wordpress convenience. Make sure you’re using managed hosting.",
  },
];
const Review = () => {
  return (
    <Box
      sx={{ backgroundColor: "#0B1121", color: "white", textAlign: "center" }}
    >
      <svg
        id="wave"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 210"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(0, 2, 18, 1)" offset="0%"></stop>
            <stop stopColor="rgba(0, 2, 18, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,42L34.3,45.5C68.6,49,137,56,206,77C274.3,98,343,133,411,147C480,161,549,154,617,136.5C685.7,119,754,91,823,73.5C891.4,56,960,49,1029,63C1097.1,77,1166,112,1234,119C1302.9,126,1371,105,1440,98C1508.6,91,1577,98,1646,101.5C1714.3,105,1783,105,1851,105C1920,105,1989,105,2057,91C2125.7,77,2194,49,2263,42C2331.4,35,2400,49,2469,63C2537.1,77,2606,91,2674,105C2742.9,119,2811,133,2880,122.5C2948.6,112,3017,77,3086,80.5C3154.3,84,3223,126,3291,122.5C3360,119,3429,70,3497,63C3565.7,56,3634,91,3703,119C3771.4,147,3840,168,3909,164.5C3977.1,161,4046,133,4114,105C4182.9,77,4251,49,4320,35C4388.6,21,4457,21,4526,17.5C4594.3,14,4663,7,4731,7C4800,7,4869,14,4903,17.5L4937.1,21L4937.1,210L4902.9,210C4868.6,210,4800,210,4731,210C4662.9,210,4594,210,4526,210C4457.1,210,4389,210,4320,210C4251.4,210,4183,210,4114,210C4045.7,210,3977,210,3909,210C3840,210,3771,210,3703,210C3634.3,210,3566,210,3497,210C3428.6,210,3360,210,3291,210C3222.9,210,3154,210,3086,210C3017.1,210,2949,210,2880,210C2811.4,210,2743,210,2674,210C2605.7,210,2537,210,2469,210C2400,210,2331,210,2263,210C2194.3,210,2126,210,2057,210C1988.6,210,1920,210,1851,210C1782.9,210,1714,210,1646,210C1577.1,210,1509,210,1440,210C1371.4,210,1303,210,1234,210C1165.7,210,1097,210,1029,210C960,210,891,210,823,210C754.3,210,686,210,617,210C548.6,210,480,210,411,210C342.9,210,274,210,206,210C137.1,210,69,210,34,210L0,210Z"
        ></path>
      </svg>
      <TitleWithDescription
        title="Loved by product people"
        description="Here’s what people are saying about us"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          pb: [5, 10],
          px: 3,
        }}
      >
        {reviews.map((review, index) => (
          <Box
            key={review.id}
            sx={{
              background: "linear-gradient(135deg, #12173D, #111638)",
              borderRadius: "15px",
              padding: "30px",
              width: { xs: "100%", sm: "45%", md: "30%" },
              textAlign: "left",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              color: "white",
              transition: "border 0.3s ease-in-out",
              border: "3px solid #0B1121",
              "&:hover": {
                border: "3px solid #6249CE",
              },
            }}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            <Typography
              sx={{ fontSize: ["15px", "18px"], lineHeight: 1.7 }}
              mb={2}
            >
              {review.review}
            </Typography>
            <Box display="flex" alignItems="center">
              <Avatar
                src={review.avatar}
                alt={review.name}
                sx={{ width: 50, height: 50, marginRight: "10px" }}
              />
              <Box>
                <Typography
                  sx={{
                    color: "#9F89FF",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {review.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6249CE",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  {review.role}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Review;
