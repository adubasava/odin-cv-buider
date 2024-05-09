import { useState } from 'react';
import './styles/style.css';
import data from './components/data.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Cv from './components/CV.jsx';
import { v4 as uuid } from 'uuid';

function App() {
  const [personalInfo, setPersonalInfo] = useState(data.personal);
  const [educationInfo, setEducationInfo] = useState(data.education);
  const [experienceInfo, setExperienceInfo] = useState(data.experience);

  function changePersonalInfo(property, value) {
    const newPersonalInfo = { ...personalInfo, [property]: value };
    setPersonalInfo(newPersonalInfo);
  }

  function changeEducationInfo(educationId, property, value) {
    const newEducation = [];

    educationInfo.forEach((education) => {
      if (educationId !== education.id) {
        newEducation.push(education);
        return;
      }
      newEducation.push({ ...education, [property]: value });
    });
    setEducationInfo(newEducation);
  }

  function deleteEducation(educationId) {
    const newEducation = educationInfo.filter(
      (education) => education.id !== educationId,
    );
    setEducationInfo(newEducation);
  }

  function addEducation() {
    const newEducation = [...educationInfo];
    newEducation.push({
      id: uuid(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: '',
    });
    setEducationInfo(newEducation);
  }

  function changeExperienceInfo(experienceId, property, value) {
    const newExperience = [];

    experienceInfo.forEach((experience) => {
      if (experienceId !== experience.id) {
        newExperience.push(experience);
        return;
      }
      newExperience.push({ ...experience, [property]: value });
    });
    setExperienceInfo(newExperience);
  }

  function deleteExperience(experienceId) {
    const newExperience = experienceInfo.filter(
      (experience) => experience.id !== experienceId,
    );
    setExperienceInfo(newExperience);
  }

  function addExperience() {
    const newExperience = [...experienceInfo];
    newExperience.push({
      id: uuid(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    });
    setExperienceInfo(newExperience);
  }

  return (
    <>
      <Header />
      <main>
        <Sidebar
          personalInfo={personalInfo}
          changePersonalInfo={changePersonalInfo}
          educationInfo={educationInfo}
          changeEducationInfo={changeEducationInfo}
          deleteEducation={deleteEducation}
          addEducation={addEducation}
          experienceInfo={experienceInfo}
          changeExperienceInfo={changeExperienceInfo}
          deleteExperience={deleteExperience}
          addExperience={addExperience}
        />
        <Cv
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </main>
    </>
  );
}

export default App;
