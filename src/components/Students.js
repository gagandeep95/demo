import React, {useState, useEffect} from 'react';
import "../App.css";
import Searchbar from './Searchbar';
import Profile from './Profile';

function Students({students}) {
    const [studentsList, setStudentsList] = useState([]); //  list of students
    const [filteredStudents, setFilteredStudents] = useState([]); //list of filter students

    // adding students data to (studentsList) state
    useEffect(() => {
        setStudentsList(students);
    }, [students])

    // add students data to - (fileredStudents), whenever studentsList changes, it will make those changes in it  
    useEffect(() => {
        setFilteredStudents(studentsList);
    }, [studentsList])


    // This method recieve the input values from child component (Searchbar) and filter the students
    const handleSearch = (data) => {
            const result =  studentsList.filter((student) => {
            return (
                ((student.firstName + student.lastName).toLowerCase().search(data.name) >= 0)
                && (student.tags.toString().toLowerCase().search(data.tag) >=  0)
               )       
            })
            setFilteredStudents(result);
    }
    

    // This method recieve id from child comp. and then toggle the 'isOpened' status in studentsList
    const handleToggle = (id) => {    
        const results = studentsList.map((student) => {
            if(id === student.id){
                return {
                    ...student,
                    isOpened: !student.isOpened,
                }
            }
            return student;
        })
        setStudentsList(results);
    };

    // This method recieve id from child comp (Profile) and add the tag value to specific elem of object
    const handleTags = (e, index) => {
        let value = e.target.value;
        if(e.key === 'Enter'){
             const results = studentsList.map((student) => {
                 if(index === student.id){
                     if(!student.tags.includes(value)){    
                        return {
                            ...student,
                            tags : [...student.tags, value] 
                        }
                    }
                }
                 return student;
             })
             setStudentsList(results);
             e.target.value = '';     
        }
    }


    return (
        <div className="students__block">
            <Searchbar   handleSearch= {(e) => handleSearch(e)} /> 
            
            {/* This is the profile component where list of students data will get display */}
            <Profile  filteredStudents={filteredStudents} handleToggle={(id) => handleToggle(id)}
                    handleTags ={(e,index) => handleTags(e, index)}   />    
        </div>
    )
}

export default Students
