import React from 'react';
import './EnrolledStudentsTable.css'; 
const EnrolledStudentsTable = ({ enrolledStudents }) => {
  return (
    <div className="enrolled-students-table">
      <h2>Enrolled Students</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((student, index) => (
            <tr key={index}>
              <td>
                <strong>Name:</strong> {student.name} <br />
                <strong>Email:</strong> {student.email} <br />
                <strong>Website:</strong>{' '}
                <a href={student.website} target="_blank" rel="noopener noreferrer">
                  {student.website}
                </a>
                <br />
                <strong>Gender:</strong> {student.gender}
              </td>
              <td>
                {student.imageLink && (
                  <img
                    src={student.imageLink}
                    alt={student.name}
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledStudentsTable;
