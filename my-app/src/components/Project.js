import { useState } from 'react'

const Project = ({ name, url, techStack, image, blurb, code }) => {
  const [isMouseHovering, setMouseHovering] = useState(false);

  const handleMouseEnter = () => setMouseHovering(true);
  const handleMouseLeave = () => setMouseHovering(false);

  return (
    <div
      className="grid-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isMouseHovering ? (
        <div className="card">
          <p>{blurb}</p>
          <p className="tech">Tech: {techStack}</p>
          <div className="buttons">
          <a href={url}>
            <button>website</button>
          </a>
          <a href={code}>
            <button>code</button>
          </a>
          </div>
        </div>
      ) : (
        <>
          <p>{name}</p>
          <img src={image} />
        </>
      )}
    </div>
  );
};


export default Project

