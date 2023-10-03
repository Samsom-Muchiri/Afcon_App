import { useEffect, useRef, useState } from "react";
import MatchCard from "./MatchCard";

const Matches = () => {
    const containerRef = useRef(null);
  const [isAtFarLeft, setIsAtFarLeft] = useState(true);
  const [isAtFarRight, setIsAtFarRight] = useState(false);

  

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setIsAtFarLeft(container.scrollLeft === 0);
      setIsAtFarRight(
        container.scrollLeft === container.scrollWidth - container.clientWidth
      );
    };

    container.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.clientWidth;
    }
  };
  return (
    <div>
        <div className="relative">
            <div
              className="matches flex gap-4 overflow-x-scroll"
              ref={containerRef}
            >
              <MatchCard />
              <MatchCard />
              <MatchCard />
              <MatchCard />
              <MatchCard />
              <MatchCard />
            </div>

            {!isAtFarLeft > 0 && (
              <button
                className="absolute top-[50%] -translate-y-[50%] text-red-500"
                onClick={handleScrollLeft}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-10 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}
            {!isAtFarRight <
              containerRef.current?.scrollWidth -
                containerRef.current?.clientWidth && (
              <button
                className="absolute top-[50%] -translate-y-[50%] right-0 text-red-500"
                onClick={handleScrollRight}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-10 h-11"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>
    </div>
  )
}

export default Matches