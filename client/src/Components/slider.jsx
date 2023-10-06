import { useState, useEffect } from "react";
import classNames from "classnames";
import "../Style Sheets/slider-st.css"; // Replace with your actual CSS file name

function CitiesSlider() {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  let changeTO = null;
  const slides = [
    {
      city: "Nairobi",
      country: "Kenya",
      img: "https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?cs=srgb&dl=pexels-antony-trivet-13348192.jpg&fm=jpg",
    },
    {
      city: "Dar Es Salam",
      country: "Tanzania",
      img: "https://images.pexels.com/photos/11123079/pexels-photo-11123079.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      city: "Kampala",
      country: "Uganda",
      img: "https://media.istockphoto.com/id/802551426/photo/kampala-downtown.jpg?b=1&s=612x612&w=0&k=20&c=l1c3U_btYvSXqckEiFFm3KIywO4KnY8zPmpBxtD_1oI=",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    return () => {
      window.clearTimeout(changeTO);
    };
  }, []);

  function changeSlides(change) {
    const length = slides.length;
    let newActiveSlide = activeSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setPrevSlide(activeSlide);
    setActiveSlide(newActiveSlide);
  }

  useEffect(() => {
    let slidePos = 0;
    const interval = setInterval(() => {
      slidePos++;
      if (slidePos <= 2) {
        setPrevSlide(slidePos === 0 ? 2 : slidePos - 1);
        setActiveSlide(slidePos);
      } else {
        slidePos = 0;
        setPrevSlide(3);
        setActiveSlide(slidePos);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames("slider", { "s--ready": sliderReady })}>
      <p className="slider__top-heading">Host countries</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames("slider__slide", {
              "s--active": activeSlide === index,
              "s--prev": prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <h2 className="slider__slide-heading">
                {slide.city.split("").map((l, idx) => (
                  <span key={idx}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
}

export default CitiesSlider;
