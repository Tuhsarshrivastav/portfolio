import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <>
      <motion.div
        className="projectrCard col-md-6 col-lg-4 my-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <figure className="projectCard__wrapper">
          <a
            href={project.deployed_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image">
              <img
                style={{ textAlign: "center", justifyContent: "center" }}
                src={project.image}
                alt={project.name}
                className="projectCard__image"
              />
              <div className="image__overlay image__overlay--blur">
                <div className="image__title">See it Live</div>
              </div>
            </div>
          </a>
          <div className="projectCard__title">{project.name}</div>
        </figure>
      </motion.div>
    </>
  );
};

export default ProjectCard;
