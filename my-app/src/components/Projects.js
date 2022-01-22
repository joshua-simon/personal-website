import Project from "./Project"
import projects from "../project-data"

const Projects = () => {
  return (
    <div className="row">
      <div className="bottom-section">
        <div className="bottom-section-left"><p>Projects</p></div>
        <div className="grid-container">
          {projects.map((item) => {
            return (
              <Project
                name={item.name}
                url={item.url}
                image={item.image}
                techStack={item.techStack}
                blurb={item.blurb}
                code = {item.code}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects

