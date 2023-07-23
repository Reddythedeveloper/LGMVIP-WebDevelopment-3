import React, { useState } from 'react';
import './App.css';
import EnrollmentForm from './EnrollmentForm';
import EnrolledStudentsTable from './EnrolledStudentsTable';

function App() {
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleEnroll = (studentData) => {
    setEnrolledStudents([...enrolledStudents, studentData]);
  };

  const handleClear = () => {
    setEnrolledStudents([]);
  };

  return (
    <div className="App">
      <h1>Student Enrollment Form</h1>
      <div className="enrollment-container">
        <EnrollmentForm onEnroll={handleEnroll} onClear={handleClear} />
        <EnrolledStudentsTable enrolledStudents={enrolledStudents} />
      </div>
    </div>
  );
}

export default App;
