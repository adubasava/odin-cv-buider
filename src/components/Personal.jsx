import { useState } from 'react';

export default function Personal({ personalInfo, changePersonalInfo }) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <div id="personal">
      <button className="menu" onClick={handleClick}>
        <h2>Personal Details</h2>
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
        <form>
          <label>
            Full name: <br />
            <input
              value={personalInfo.fullName}
              onChange={(e) => {
                changePersonalInfo('fullName', e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Email: <br />
            <input
              type="email"
              value={personalInfo.email}
              onChange={(e) => {
                changePersonalInfo('email', e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Phone number: <br />
            <input
              type="tel"
              value={personalInfo.phone}
              onChange={(e) => {
                changePersonalInfo('phone', e.target.value);
              }}
            />
          </label>
        </form>
      </span>
    </div>
  );
}
