
import PlaceIcon from "@material-ui/icons/Place";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Sidebar.css";
const Sidebar = () => {
  const handleEmail = () => {
    window.open("mailto:ts3657@gmail.com");
  };

  return (
    <div className="sidebar">
      <img src='profile.jpg' alt="Profile" className="sidebar__avatar" />
      <div className="sidebar__name">Tushar Shrivastav</div>
      <div className="sidebar__item sidebar__title">
        <p>Full-Stack-Developer</p>
      </div>
      <a href="resume.pdf" download="resume.pdf">
        <div className="sidebar__item sidebar__resume">Resume</div>
      </a>
      <figure className="my-2 sidebar__social-icons ">
        <a href="https://twitter.com/TusharS70759853">
          <TwitterIcon
            style={{ fontSize: "30px" }}
            className="mr-3 sidebar__icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/tushar-shrivastava-2b23691b2/">
          <LinkedInIcon
            style={{ fontSize: "30px" }}
            className="sidebar__icon"
          />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github ">
          <a href="https://github.com/Tuhsarshrivastav">
            <GitHubIcon
              style={{ marginRight: "4px" }}
              className="sidebar__icon"
            />{" "}
          </a>
          Github
        </div>
        <div
          className="sidebar__item"
          style={{ cursor: "pointer", marginTop: "-2px" }}
        >
          &nbsp;
          <PlaceIcon style={{ fontSize: "30px", marginRight: "2px" }} />
          Jabalpur
        </div>
      </div>

      <div className="sidebar__item sidebar__email" onClick={handleEmail}>
        Email Me
      </div>
    </div>
  );
};
export default Sidebar;
