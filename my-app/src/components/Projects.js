import Project from "./Project"
import projects from "../project-data"

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((item,i) => {
          return(
            <div className="card">
              <img src = {item.image} />
              <h3 id = "card-header">{item.name}</h3>
              <p className = "card-item">{item.blurb}</p>
              <p className = "card-item">Tech: {item.techStack}</p>
              <div className="buttons">
                <a href = {item.url}>Website</a> 
                <a href = {item.code}>Code</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Projects

