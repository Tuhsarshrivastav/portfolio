import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProjectCard = ({ project }) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-2">
      <figure className="projectCard__wrapper">
        <a
          href={project.deployed_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LazyLoadImage
            effect="blur"
            src={project.image}
            alt={project.name}
            key={project.image}
            className="projectCard__image"
            width="100%"
            height="112px"
          />
        </a>
        <div className="projectCard__title">
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="projectCard__icon" />
          </a>
          {project.name}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
