import React, {useState, useEffect, useContext} from 'react';
import '../App.css';
import { StudentsContext } from '../App';

function Profile() {
    // const [students, setStudents] = useState(filteredStudents);   
    // const [tag, setTag] = useState("");
    // const studentId = useRef(null);

    const students = useContext(StudentsContext);

    console.log(students.studentsState.students);

    // This Method stores all the filtered list of students
    // useEffect(() => {
    //     // console.log('use effect from profile')
    //     setStudents(filteredStudents)
    // },[filteredStudents])

    // console.log(students);
    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    // This method toggle the student scores button
    // const handleToggle = (id) => {
    //     const results = students.map((student) => {
    //         if(id === student.id){
    //             return {
    //                 ...student,
    //                 isOpened: !student.isOpened,
    //             }
    //         }
    //         return student;
    //     })
    //     setStudents(results);
    // };

    // const handleTags = (e, index) => {
    //     let value = e.target.value;
    //     if(e.key === 'Enter'){
    //          const results = students.map((student) => {
    //              if(index === student.id){
    //                  if(!student.tags.includes(value)){    
    //                     return {
    //                         ...student,
    //                         tags : [...student.tags, value] 
    //                     }
    //                 }

    //              }
    //             //  console.log(student);
    //              return student;
    //          })
    //          setStudents(results);
    //          e.target.value = '';     
    //     }
    // }

    return (
        <div>
           {
                students.studentsState.filteredStudents.map((student, i) => (
                    <div className="student" key={i}>
                        <figure className="student__pic">
                            <img src={student.pic} alt="profilepic"/>
                        </figure>   
                        <div className="student__info">
                            <h1>{student.firstName + ' ' + student.lastName}</h1>
                            <p>Email: {student.email}</p>
                            <p>Company: {student.company}</p>
                            <p>Skill: {student.skill}</p>
                            <p>Average: {student.grades.reduce(findAverage, 0)} %</p>
                            <br/>
                            <div className="tags">
                                {student.tags.map((tag, i) => (
                                    <div key={i}>
                                        <p>{tag}</p>
                                    </div>
                                ))}
                            </div>
                            {/* <input  type="text" className="addTag" onKeyDown={(e) => handleTags(e, student.id)} placeholder="Add a Tag"/> */}
                            <div className="scores">
                            {   
                                student.isOpened ? 
                                student.grades.map((score, index) => (
                                    <div key={index}>
                                    <p>{`Test ${index + 1} - ${score}%`}</p>
                                    </div>
                                ))
                                : ''
                            }
                            </div>
                        </div>
                        {/* <div className="student__scores">
                            {!student.isOpened ? 
                            (<button onClick={() =>handleToggle(student.id)}>+</button>) :
                            (<button onClick={() => handleToggle(student.id)}>-</button>)
                        }  
                        </div>     */}
                   </div>        
                ))
            } 
        </div>
    )
}

export default Profile
