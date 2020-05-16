import React from 'react';

const Work = ({ applications, addImagesCount }) => {
  
  const linkToPage = url => {
    window.open(url, '_blank');
  };

  return (
    <div className="all-work">
      <div className="work-title">WORK</div>
      {applications.map((application, index) => {
        const {
          name,
          image,
          description,
          technologies,
          repo,
          url
        } = application;
        return (
          <div className="work" key={index}>
            {name === 'Personal Trainer Finder' ? (
              <img className="gym-app-img" src={image} onLoad={() => addImagesCount()} />
            ) : name === 'Trafalgar System Design Project' ? (
              <div className="app-img-view-sdc">
                <div className="app-img-text">
                  Three EC2 Instances with Nginx Caching and Load Balancing
                </div>
                <img className="app-img-sdc" src={image} onLoad={() => addImagesCount()} />
              </div>
            ) : (
              <div className="app-img-view">
                <img className="app-img" src={image} onLoad={() => addImagesCount()} />
              </div>
            )}
            <div className="app-description">
              <p style={{ fontWeight: 'bold' }}>{name}</p>
              <p>
                {description}
                <br />
                Built with: {technologies.join(' | ')}
              </p>
              <div className="work-btn">
                <button className="view-repo" onClick={() => linkToPage(repo)}>
                  VIEW REPO
                </button>
                {url && (
                  <button
                    className="visit-site"
                    onClick={() => linkToPage(url)}
                  >
                    VISIT SITE
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
