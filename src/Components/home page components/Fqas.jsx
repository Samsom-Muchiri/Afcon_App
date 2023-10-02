import React, { useRef } from "react";

function Fqas() {
  const sliderRef = useRef();
  const itemWidth = window.innerWidth;

  const moveSlider = (sliderRef, direction) => {
    const scrollAmount = direction * itemWidth;
    const scrollWidth = sliderRef.current.scrollWidth;
    let newPosition = sliderRef.current.scrollLeft + scrollAmount;

    if (newPosition < 0) {
      newPosition = scrollWidth - itemWidth;
    } else if (newPosition >= scrollWidth) {
      newPosition = 0;
    }

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };
  const qas = [
    {
      qa: "AFCON ticket: Register your intrest and find out how to buy",
    },
    {
      qa: "How doea qualifing for AFCON work",
    },
    {
      qa: "How many teams will be playing",
    },
    {
      qa: "Data set for afcon world cup",
    },
    {
      qa: "How has qualified",
    },
  ];
  return (
    <div className="scroll-container">
      <h1>FQAS</h1>
      <div
        className="scroll-btn scroll-l"
        onClick={() => moveSlider(sliderRef, 1)}
      >
        <span class="material-symbols-outlined scroll-l">arrow_back_ios</span>
      </div>
      <div
        className="scroll-btn scroll-r"
        onClick={() => moveSlider(sliderRef, 1)}
      >
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <div className="fq-slider" ref={sliderRef}>
        <div className="fq-sl-container">
          {qas.map((data) => {
            return (
              <div className="qa-card" key={data.qa}>
                {data.qa}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fqas;
