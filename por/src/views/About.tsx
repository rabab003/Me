/* eslint-disable jsx-a11y/heading-has-content */
// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";
import Linkedin from "../assets/icons8-linkedin (1).svg";
import Github from "../assets/icons8-github.svg";

// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          background: `url(${aboutPageImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary">me</span>
            </h2>

            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary leading-8 tracking-wider	">
              Greetings! I'm Rabab, a digital artisan who sculpts code into
              captivating digital realms.
              <span className="text-secondary">
                With the finesse of a digital brushstroke, I breathe life into
                websites using HTML, CSS, and JavaScript, fusing artistry and
                interactivity.
              </span>
              My mission is to craft online masterpieces that inspire awe and
              provoke curiosity. Join me on this creative journey as we turn
              your dreams into digital realities. Welcome to my ever-evolving
              canvas!
            </p>
            <div className="flex  items-center justify-center xl:justify-start gap-6">
              {/* <SocialMediaIcon imgSrc={Linkedin} title="Linkedin" />
              <SocialMediaIcon imgSrc={facebookIcon} title="FaceBook" />
              <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
              <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube" /> */}

              <div className="flex  items-center justify-center xl:justify-start gap-6">
                <a
                  href="https://www.linkedin.com/in/rabab-qasim-32b189219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaIcon imgSrc={Linkedin} title="Linkedin" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100078226911371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaIcon imgSrc={facebookIcon} title="FaceBook" />
                </a>
                <a
                  href="https://www.instagram.com/rabix_01/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
                </a>
                <a
                  href="https://github.com/rabab003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaIcon imgSrc={Github} title="Github" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={aboutIllustration}
              className="max-w-full sm:max-w-[401px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
