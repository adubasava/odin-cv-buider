import { useState } from 'react';

function Education({
  educationInfo,
  changeEducationInfo,
  deleteEducation,
  addEducation,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <div id="education">
      <button className="menu" onClick={handleClick}>
        <h2>Education</h2>
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
        {educationInfo.map((education) => {
          return (
            <span id="education-info" key={education.id}>
              <form>
                <label>
                  School: <br />
                  <input
                    value={education.school}
                    onChange={(e) => {
                      changeEducationInfo(
                        education.id,
                        'school',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <br />
                <label>
                  Degree: <br />
                  <input
                    value={education.degree}
                    onChange={(e) => {
                      changeEducationInfo(
                        education.id,
                        'degree',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <br />
                <label>
                  Start date: <br />
                  <input
                    value={education.startDate}
                    onChange={(e) => {
                      changeEducationInfo(
                        education.id,
                        'startDate',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <label>
                  End date: <br />
                  <input
                    value={education.endDate}
                    onChange={(e) => {
                      changeEducationInfo(
                        education.id,
                        'endDate',
                        e.target.value,
                      );
                    }}
                  />
                </label>
                <label>
                  Location: <br />
                  <input
                    value={education.location}
                    onChange={(e) => {
                      changeEducationInfo(
                        education.id,
                        'location',
                        e.target.value,
                      );
                    }}
                  />
                </label>
              </form>
              <span className="buttons">
                <button
                  onClick={() => {
                    deleteEducation(education.id);
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
              addEducation();
            }}
          >
            Add Education
          </button>
        </span>
      </span>
    </div>
  );
}

export default Education;
