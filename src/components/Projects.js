import { useState } from "react";
import data_projects from "../Data/data_projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "./Projects.css";
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
  return (
    <motion.div
      className="container projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="projects__navbar">
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
          Mern
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React
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
          Next
        </div>
        <div
          className={active === "node.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("node.js")}
        >
          Node
        </div>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
