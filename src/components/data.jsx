import { v4 as uuid } from 'uuid';

const data = {
  personal: {
    fullName: 'Harry Potter',
    email: 'abc@example.com',
    phone: '123 456 789',
  },
  education: [
    {
      id: uuid(),
      school: 'Harvard',
      degree: 'bachelor',
      startDate: '09/2020',
      endDate: '06/2023',
      location: 'Harvard',
    },
  ],
  experience: [
    {
      id: uuid(),
      company: 'Google',
      position: 'developer',
      startDate: '07/2023',
      endDate: 'present',
      responsibilities: 'Designing and creating software',
    },
  ],
};

export default data;
