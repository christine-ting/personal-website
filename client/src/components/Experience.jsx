import React from 'react';
const Experience = ({ experience }) => (
  <div className="experience">
    { experience.map((work, index) => {
      const { name, place, titles, details } = work;
      return (
        <div className="job" key={index}>
          <div className="job-title" style={{fontWeight: 400}}>
            {name} | {place}
          </div>
          <div className="roles">
            { titles.map((role, index) => {
              const { title, time } = role;
              return (
                <div className="role-duration" key={index}>
                  <div>
                    {title}
                  </div>
                  <div>
                    {time}
                  </div>
                </div>
              )
            }) }
          </div>
          <div className="job-details">
            { details.map((point, index) => (
              <p key={index}>
                &#9675;&nbsp;{point}
              </p>
            )) }
          </div>
        </div>
      )
    }) }
  </div>
);

export default Experience;