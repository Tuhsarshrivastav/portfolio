import React, { useState } from "react";
import data_projects from "../Data/data_projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
    setActive(name);
  };
  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="container projects"
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="projects__navbar">
        <Helmet>
          <title> Tushar shrivastav | Projects</title>
          <meta name="description" content="Here's my all projcts" />
          <meta name="keywords" content="Mern,react.js,node.js,react-native" />
        </Helmet>
        <div
          className={active === "All" && "projects__navbar-active"}
          onClick={() => {
            setProjects(data_projects);
            setActive("All");
          }}
        >
          All
        </div>
        <div
          style={{}}
          className={active === "mern-stack" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("mern-stack")}
        >
          MERN
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React.js
        </div>
        <div
          className={active === "react-native" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react-native")}
        >
          Native
        </div>
        <div
          className={active === "nextjs" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("nextjs")}
        >
          Next.js
        </div>
        <div
          className={active === "node.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("node.js")}
        >
          Node.js
        </div>

        <div
          className={active === "design" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("design")}
        >
          Design
        </div>
      </div>
      <div className="row">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
