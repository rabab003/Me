// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "uiUx" | "web";

const Projects = () => {
  let [activeCatgory, setActiveCategory] = useState<string>("uiUx");
  let filterProjects = () => {
    if (activeCatgory === "uiUx") {
      return projects.filter((item) => item.category === "uiUx");
    } else {
      return projects.filter((item) => item.category === "web");
    }
  };
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="project"
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            My recent <span className="text-secondary">Project</span>
          </h2>
          <div className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row">
            <Button
              secondary={activeCatgory === "uiUx" ? true : false}
              onClick={() => setActiveCategory("uiUx")}
            >
              Ui/UX
            </Button>
            <Button
              secondary={activeCatgory === "web" ? true : false}
              onClick={() => setActiveCategory("web")}
            >
              web design
            </Button>
          </div>

          <div className="flex gap-12 mt-12 flex-wrap justify-center">
            {filterProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
