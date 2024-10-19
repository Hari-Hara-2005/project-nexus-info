import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; 

const Carousel = () => {
  const slides = [
    {
      img: "Assets/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      buttons: ["SEE MORE", "SUBSCRIBE"],
    },
    {
        img: "Assets/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      buttons: ["SEE MORE", "SUBSCRIBE"],
    },
    {
        img: "Assets/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      buttons: ["SEE MORE", "SUBSCRIBE"],
    },
    {
        img: "Assets/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
      buttons: ["SEE MORE", "SUBSCRIBE"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const AUTO_PLAY_INTERVAL = 7000;
  const TRANSITION_DURATION = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contacts</a>
          <a href="#">Info</a>
        </nav>
      </header>

      <div className="carousel">
        <div
          className="list"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="item" key={index}>
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <div className="content">
                <div className="author">{slide.author}</div>
                <div className="title">{slide.title}</div>
                <div className="topic">{slide.topic}</div>
                <div className="des">{slide.des}</div>
                <div className="buttons">
                  {slide.buttons.map((btn, idx) => (
                    <button key={idx}>{btn}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div
              className={`item ${index === currentIndex ? "active" : ""}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={slide.img} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button id="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className="time"></div>
      </div>
    </div>
  );
};

export default Carousel;
