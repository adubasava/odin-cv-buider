import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';

function Sidebar({
  personalInfo,
  changePersonalInfo,
  educationInfo,
  changeEducationInfo,
  deleteEducation,
  addEducation,
  experienceInfo,
  changeExperienceInfo,
  deleteExperience,
  addExperience,
}) {
  return (
    <div id="sidebar">
      <Personal
        personalInfo={personalInfo}
        changePersonalInfo={changePersonalInfo}
      />
      <Education
        educationInfo={educationInfo}
        changeEducationInfo={changeEducationInfo}
        deleteEducation={deleteEducation}
        addEducation={addEducation}
      />
      <Experience
        experienceInfo={experienceInfo}
        changeExperienceInfo={changeExperienceInfo}
        deleteExperience={deleteExperience}
        addExperience={addExperience}
      />
    </div>
  );
}

export default Sidebar;
