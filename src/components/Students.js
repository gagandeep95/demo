import React from 'react'

function Students({students}) {

    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    return (
        <div>
            {
                students.map((student, key) => (
                   <div key = {student.id}>
                       <img src={student.pic} alt="profilepic"/>
                       <h1>{student.firstName + ' ' + student.lastName}</h1>
                       <p>Email: {student.email}</p>
                       <p>Company: {student.company}</p>
                       <p>Skill: {student.skill}</p>
                       <p>Average: {student.grades.reduce(findAverage, 0)} %</p>
                   </div>        
                ))
            }      
        </div>
    )
}

export default Students
