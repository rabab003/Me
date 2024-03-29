// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen flex items-center justify-center"
        style={{
          background: `url(${homePageImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
          <div className="w-full xl:w-fit">
            <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl  text-textPrimary uppercase">
              creatve
              <br />
              <span className="text-secondary md:text-5xl lg:text-7xl  capitalize">
                <Typewriter
                  words={["front-end developer"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={250}
                  deleteSpeed={150}
                  loop
                />
              </span>
            </h1>

            <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button icon={downloadIcon}>Download CV</Button>
              </a>
            </div>
          </div>
          <img
            src={homePageIllustation}
            alt=""
            className="max-w-full sm:max-w-{401px}"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"></div>
      </div>
    </>
  );
};

export default Hero;
