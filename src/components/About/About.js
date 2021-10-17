import { Aboutskills } from "../../Data/About_data";
import "./About.css";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h6 className="about__intro">
        i design and build quality webapps , clean interfaces and rich
        interactive web apps targeting javascript frontend & backend stacks and
        other opportunities i'm open to learning, adapt to work with the team
        and use skills to solve complex development challenges and provide value
        to the growth of an organization
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {Aboutskills.map((skill, index) => (
            <div className="col-lg-6" key={index}>
              <div className="skill-card">
                <div className="skill-card-body">
                  <h6 className="skill-card__title">{skill.title}</h6>
                  <p className="skill_card__content">{skill.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
