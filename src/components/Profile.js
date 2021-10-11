import React from 'react';
import '../App.css';


function Profile(props) {

    // This method get id from onKeyDown event and pass it to the parent comp.
    const handleToggle = (student_id) => {
        props.handleToggle(student_id);
    }

    // This method recieve index from onClick event and pass it to the parent comp.
    const handleTags = (e, index) => {
        props.handleTags(e, index);
    }

    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    return (
        <div>
             {
                props.filteredStudents.map((student, i) => (
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
                                        <p className="tag">{tag}</p>
                                    </div>
                                ))}
                            </div>
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
                            <input  type="text" className="addTag" onKeyDown={(e) => handleTags(e, student.id)} placeholder="Add a Tag"/>

                        </div>
                        <div className="student__scores">
                            {!student.isOpened ? 
                            (<button onClick={() => handleToggle(student.id)}>+</button>) :
                            (<button onClick={() => handleToggle(student.id)}>-</button>)
                        }  
                        </div>    
                   </div>        
                ))
            } 
        </div>
    )
}

export default Profile
