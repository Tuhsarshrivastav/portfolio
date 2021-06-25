import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

const ProjectCard = ({
  project: { name, image, deployed_url, github_url },
}) => {
  return (
    <div className="projectrCard col-md-6 col-lg-4 my-2">
      <figure className="projectCard__wrapper">
        <a href={deployed_url} target="_blank" rel="noopener noreferrer">
          <img  src={image} alt={name} loading="lazy" className="projectCard__image" />
        </a>
        <div className="projectCard__title">
          <a href={github_url} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="projectCard__icon" />
          </a>
          {name}
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
