import React, {useState, useEffect} from 'react';
import '../App.css';

function Profile({filteredStudents}) {
    const [students, setStudents] = useState([]);   
    
    // This Method stores all the filtered list of students
    useEffect(() => {
        setStudents(filteredStudents)
    }, [filteredStudents])

    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    // This method toggle the student scores button
    const handleToggle = (index) => {
        const results = students.map((item, idx) => {
            if(index === idx){
                return {
                    ...item,
                    isOpened: !item.isOpened,
                }
            }
            return item;
        })
        setStudents(results);
    }

    return (
        <div>
           {
                students.map((student, i) => (
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
                        <div className="student__scores">
                            {!student.isOpened ? 
                            (<button onClick={() =>handleToggle(i)}>+</button>) :
                            (<button onClick={() => handleToggle(i)}>-</button>)
                        }  
                        </div>    
                   </div>        
                ))
            } 
        </div>
    )
}

export default Profile
