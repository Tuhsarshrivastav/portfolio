import { useState } from "react";
import data_projects from "../../Data/data_projects";
import ProjectCard from "../ProjectCard/ProjectCard";
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
          All<span className='hide'>-Projects</span>
        </div>
        <div
        
          className={active === "mern-stack" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("mern-stack")}
        >
          Mern<span className='hide'>-Stack</span>
        </div>
        <div
          className={active === "react-native" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react-native")}
        >
          <span className='hide'>React-</span>Native
        </div>
        <div
          className={active === "node.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("node.js")}
        >
          Node<span className='hide'>-Express</span>
        </div>
        <div
          className={active === "react.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("react.js")}
        >
          React.js
        </div>
        <div
          className={active === "vue.js" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("vue.js")}
        >
          Vue.js
        </div>
        <div
          className={active === "angular" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("angular")}
        >
          Angular
        </div>
        <div
          className={active === "nextjs" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("nextjs")}
        >
          Next.js
        </div>
        <div
          className={active === "games" && "projects__navbar-active"}
          onClick={() => handleFilterCategory("games")}
        >
          Games
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
