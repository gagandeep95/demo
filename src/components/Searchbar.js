import React, {useContext, useEffect} from 'react';
import Profile from './Profile';
import '../App.css';
import { StudentsContext } from '../App';


function Searchbar() {
    // const [filteredStudents, setFilteredStudents] = useState([]);
    const studentsContext  = useContext(StudentsContext);
    
    console.log(studentsContext.studentsState.students)
    // useEffect(() => {
    //     console.log('use effect from searchbar');
    //     setFilteredStudents(students);
    // }, [students])
    // useEffect(() => {

    // })

    // console.log(filteredStudents);

    const handleSearch = (e) => {
        let name  = e.target.value;
       
     
          studentsContext.studentsDispatch({type: 'SEARCH_BY_NAME', payload: name})
   
    
        // This result arr stores filtered list of students
    //     const result =  students.filter((student) => {
    //         return ((student.firstName + ' ' + student.lastName).toLowerCase()).search(name) !== -1;        
    //     })
    //     setFilteredStudents(result)
    }

    // const handleSearchTags = (e) => {
    //     let tag  = e.target.value;

    //     // This result arr stores filtered list of students
    //     const result =  students.filter((student) => {
            
    //         console.log(student.tags);
    //         return student.tags;
    //         // return (students.tags.includes(tag)) !== -1;        
    //     })

    //     console.log(result);
    //     // setFilteredStudents(result)
    // }

    return (
        <>
            <div>
                <input onChange={handleSearch} className="searchName" type="text" placeholder="Search By Name"/>
                {/* <input onChange={handleSearchTags}  className="searchName" type="text" placeholder="Search By Tag"/> */}
            </div>

            {/* This is the profile component where list of students data will get display */}
            <Profile />
        </>
    )
}

export default Searchbar
