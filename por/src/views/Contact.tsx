// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  return (
    <div
      id="contact"
      className="overflow-hidden min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col justify-center items-center text-center py-16">
        <h2 className="text-center flex justify-center items-center text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary py-14">
          Contact <span className="text-secondary"> . ME</span>
        </h2>

        <div className=" md:flex w-screen justify-evenly gap-28 items-center">
          <img src={contactIllustration} alt="" />

          <div className="text-center text-white w-[80%] md:w-[50%]">
            <p className="capitalize leading-8 tracking-wider">
              I am dedicated to fostering collaborative relationships with
              clients who prioritize exceptional user experiences. Whether you
              have a specific project in mind or <span> </span>
              <span className="text-secondary font-medium">
                wish to explore potential opportunities, please feel free to
                reach out to me .
              </span>
              I look forward to discussing
              <span className="text-secondary"> how we can work</span> together
              to achieve your objectives :
            </p>
            <div className="socail pt-10 pb-40">
              <p>Email : qasimrabab021@gmail.com</p>
              <p>Num : +964 07840971013</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-screen-2xl flex flex-col xl:flex-col xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            About <span className="text-secondary">me</span>
          </h2>
          <img src={contactIllustration} className="max-h-[348px]" alt="" />
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
            <p>Email</p>
            <p>Email</p>
            <p>Email</p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <LabelInput labelText="your name" placeholderText="Name" />
              <LabelInput labelText="your email" placeholderText="email" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[696px]">
              <LabelInput
                labelText="your message"
                placeholderText="message"
                textarea
              />
            </div>
            <Button secondary>send message</Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
