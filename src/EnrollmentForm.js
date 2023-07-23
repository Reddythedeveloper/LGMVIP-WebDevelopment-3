import React, { useState } from 'react';
import './EnrollmentForm.css'; // Import the CSS file for this component

const EnrollmentForm = ({ onEnroll, onClear }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (event) => {
    const { value } = event.target;
    setSkills((prevSkills) =>
      prevSkills.includes(value)
        ? prevSkills.filter((skill) => skill !== value)
        : [...prevSkills, value]
    );
  };

  const handleEnrollClick = () => {
    const studentData = {
      name,
      email,
      website,
      imageLink,
      gender,
      skills,
    };
    onEnroll(studentData);
  };

  const handleClearClick = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setImageLink('');
    setGender('');
    setSkills([]);
    onClear();
  };

  return (
    <div className="enrollment-form">
      <h2>Enrollment Form</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* Other input fields for email, website, imageLink, gender, and skills */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input
          type="url"
          id="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageLink">Image Link:</label>
        <input
          type="url"
          id="imageLink"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div className="radio-group">
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <div className="skills-container">
          <div>
            <input
              type="checkbox"
              value="java"
              onChange={handleSkillChange}
              checked={skills.includes("java")}
            />
            <label>Java</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="html"
              onChange={handleSkillChange}
              checked={skills.includes("html")}
            />
            <label>HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="css"
              onChange={handleSkillChange}
              checked={skills.includes("css")}
            />
            <label>CSS</label>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleEnrollClick}>Enroll</button>
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default EnrollmentForm;
