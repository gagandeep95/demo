import React, {useState} from 'react';
import Profile from './Profile';
import '../App.css';
import { useEffect } from 'react/cjs/react.development';

function Searchbar({students}) {
    const [filteredStudents, setFilteredStudents] = useState(students);

    useEffect(() => {
        setFilteredStudents(students);
    },[students])

    const handleSearch = (e) => {
        let name  = e.target.value;

        // This result arr stores filtered list of students
        const result =  students.filter((student) => {
            return ((student.firstName + ' ' + student.lastName).toLowerCase()).search(name) !== -1;        
        })
        setFilteredStudents(result)
    }

    return (
        <>
            <div>
                <input onChange={handleSearch} className="searchName" type="text" placeholder="Search By Name"/>
            </div>

            {/* This is the profile component where list of students data will get display */}
            <Profile  filteredStudents={filteredStudents}/>
        </>
    )
}

export default Searchbar
