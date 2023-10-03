import { useEffect, useRef, useState } from "react";
import MatchCard from "./reusables/MatchCard";
//import styled from "styled-components";

const Qualifiers = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  //   const [scrollLeft, setScrollLeft] = useState(0);
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
    <div className="h-full w-full bg-bgcolor font-poppins">
      <div className="h-full ">
        <header className=" text-[2rem] h-[10rem] bg-blue-500 text-white flex items-center pl-12 font-semibold">
          2024 Africa Cup of Nations&trade; Qualifiers
        </header>

        <div className="w-[95%] m-auto">
          <h1 className="my-7 uppercase text-[1.3rem] font-semibold">
            Follow the 2024 AFCON Qualifiers
          </h1>

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

          <section className="h-screen w-full mb-10 mt-20">
            <h1 className="mb-2 uppercase text-[1.7rem] font-semibold">
              latest qualifiers news
            </h1>
            <Section className="the_grid">
              <div className=" grid-box">
                <div className="w-full h-[25rem] rounded-xl"></div>
                <p className="mt-4 mb-6 font-semibold text-[1.7rem] w-[35rem]">
                  Pep-inspired Sysomvang pursuing big dream with Laos
                </p>
                <p>
                  We hear from Laos interim head coach Kanlaya Sysomvang, who
                  has ambitions of leading his team all the way to the FIFA
                  World Cup.
                </p>
              </div>
              <div className=" grid-box">
                <div className="w-full h-[13rem] rounded-xl"></div>
                <p className="mt-4 mb-6 font-semibold text-[1rem] w-[17rem]">
                  Pep-inspired Sysomvang pursuing big dream with Laos
                </p>
              </div>
              <div className=" grid-box">
                <div className="w-full h-[13rem] rounded-xl"></div>
                <p className="mt-4 mb-6 font-semibold text-[1rem] w-[17rem]">
                  Pep-inspired Sysomvang pursuing big dream with Laos
                </p>
              </div>
              <div className=" grid-box">
                <div className="w-full h-[13rem] rounded-xl"></div>
                <p className="mt-4 mb-6 font-semibold text-[1rem] w-[17rem]">
                  Pep-inspired Sysomvang pursuing big dream with Laos
                </p>
              </div>
              <div className=" grid-box">
                <div className="w-full h-[13rem] rounded-xl"></div>
                <p className="mt-4 mb-6 font-semibold text-[1rem] w-[17rem]">
                  Pep-inspired Sysomvang pursuing big dream with Laos
                </p>
              </div>
            </Section>
          </section>
        </div>
      </div>
    </div>
  );
};
`const Section = styled.section
  // background-color:red;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.3rem;
  grid-template-areas:
    "one two three"
    "one four five";
  .grid-box {
    &:nth-of-type(1) {
      grid-area: one;

      div {
        background-image: url("https://digitalhub.fifa.com/transform/a3110273-7918-4454-8214-9539c8637be0/Kanlaya-Sysomvang-coaching-Laos-2023?io=transform:fill,aspectratio:16x9,width:640&quality=75");
        background-size: 100% 100%;
        // background-color:red;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
      }
    }
    &:nth-of-type(2) {
      grid-area: two;

      div {
        background-image: url("https://digitalhub.fifa.com/transform/0513e3a6-d046-4d7f-929a-9e6b520e7bce/-230616-DALIAN-June-16-2023-Michael-Feichtenbeiner-head-coach-of-Myanmar-instructs-during-an-international-fo?io=transform:fill,aspectratio:16x9,width:450&quality=75");
        background-size: 100% 100%;
        // background-color:red;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
      }
    }
    &:nth-of-type(3) {
      grid-area: three;

      div {
        background-image: url("https://digitalhub.fifa.com/transform/94606d1c-537b-4697-ac05-c5f911e8b098/Morocco-v-Croatia-Group-F-FIFA-World-Cup-Qatar-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75");
        background-size: 100% 100%;
        // background-color:red;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
      }
    }
    &:nth-of-type(4) {
      grid-area: four;

      div {
        background-image: url("https://digitalhub.fifa.com/transform/c0952d5b-481b-498e-8d07-4fa2091f6fbb/Jordi-Amat-with-Indonesia-National-Team-at-AFF-Cup-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75");
        background-size: 100% 100%;
        // background-color:red;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
      }
    }
    &:nth-of-type(5) {
      grid-area: five;
      div {
        background-image: url("https://digitalhub.fifa.com/transform/e4d12af3-a9a7-4d1b-baca-d167030272f1/Japan-s-midfielder-Kou-Itakura-C-Australia-s-midfielder-Awer-Mabil-L-and-forward-Mitchell-Duke-R-tussle-for-the-ball-during-the-Qatar-World-Cup-2022-Asian-zone-Group-B-qualification-football-match-between-Australia-and-Japan-in-Sydney-on-March-24-2022?io=transform:fill,aspectratio:16x9,width:450&quality=75");
        background-size: 100% 100%;
        // background-color:red;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
      }
    }
  }
`;

export default Qualifiers;
