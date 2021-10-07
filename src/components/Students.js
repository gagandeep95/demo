import React from 'react';
import './Students.css';

function Students({students}) {

    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    return (
        <div className="students__block">
            {
                students.map((student, key) => (
                    <div className="student" key={student.id}>
                        <figure className="student__pic">
                            <img src={student.pic} alt="profilepic"/>
                        </figure>   
                        <div className="student__info">
                            <h1>{student.firstName + ' ' + student.lastName}</h1>
                            <p>Email: {student.email}</p>
                            <p>Company: {student.company}</p>
                            <p>Skill: {student.skill}</p>
                            <p>Average: {student.grades.reduce(findAverage, 0)} %</p>
                        </div>
                   </div>        
                ))
            }      
        </div>
    )
}

export default Students
