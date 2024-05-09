import { useState } from 'react';

function Experience({
  experienceInfo,
  changeExperienceInfo,
  deleteExperience,
  addExperience,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <div id="experience">
      <button className="menu" onClick={handleClick}>
        <h2>Experience</h2>
        <span className={!isShown ? 'down' : 'up'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="35px"
          >
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </span>
      </button>
      <span className={!isShown ? 'hidden' : ''}>
        {experienceInfo.map((experience) => {
          return (
            <span id="education-info" key={experience.id}>
              <form>
                <label>
                  Company: <br />
                  <input
                    value={experience.company}
                    onChange={(e) => {
                      changeExperienceInfo(
                        experience.id,
                        'company',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <br />
                <label>
                  Position: <br />
                  <input
                    value={experience.position}
                    onChange={(e) => {
                      changeExperienceInfo(
                        experience.id,
                        'position',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <br />
                <label>
                  Start date: <br />
                  <input
                    value={experience.startDate}
                    onChange={(e) => {
                      changeExperienceInfo(
                        experience.id,
                        'startDate',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <label>
                  End date: <br />
                  <input
                    value={experience.endDate}
                    onChange={(e) => {
                      changeExperienceInfo(
                        experience.id,
                        'endDate',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <label>
                  Responsibilities: <br />
                  <input
                    value={experience.responsibilities}
                    onChange={(e) => {
                      changeExperienceInfo(
                        experience.id,
                        'responsibilities',
                        e.target.value,
                      );
                    }}
                  />
                </label>
              </form>
              <span className="buttons">
                <button
                  onClick={() => {
                    deleteExperience(experience.id);
                  }}
                >
                  Delete
                </button>
              </span>
              <hr />
            </span>
          );
        })}
        <span className="buttons">
          <button
            onClick={() => {
              addExperience();
            }}
          >
            Add Experience
          </button>
        </span>
      </span>
    </div>
  );
}

export default Experience;
