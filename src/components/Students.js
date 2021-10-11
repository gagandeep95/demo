import React, {useState, useEffect} from 'react';
import "../App.css";

function Students({students}) {
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [list, setList] = useState([]);
    const [filters, setFilters] = useState({name: '', tag: ''});


    useEffect(() => {
        setList(students);
    }, [students])

    useEffect(() => {
        setFilteredStudents(list);
    }, [list])


    const handleSearch = (e) => {
        let value  = e.target.value;

        setFilters({
            ...filters,
            [e.target.name] : value
        })
        
        console.log(filters);

            const res =  list.filter((student) => {
                // return (((student.firstName + ' ' + student.lastName).toLowerCase()).search(value) !== -1 )
               return (
                ((student.firstName + student.lastName).toLowerCase().search(filters.name) >= 0)
                && (student.tags.toString().toLowerCase().search(filters.tag) >=  0)
               )       
            })
            console.log(res);
            setFilteredStudents(res);
    }

    const handleSearchList = () => {
        const res =  list.filter((student) => {
            // return (((student.firstName + ' ' + student.lastName).toLowerCase()).search(value) !== -1 )
           return (
            ((student.firstName + student.lastName).toLowerCase().search(filters.name) >= 0)
            && (student.tags.toString().toLowerCase().search(filters.tag) >=  0)
           )       
        })
        console.log(res);
        setFilteredStudents(res);
    }
    
    // const handleSearchByTag = (e) => {
    //     let tag = e.target.value;
        
    //     const result =  filteredStudents.filter((student) => {
    //         return ((student.tags.toString()).search(tag)) !== -1;        
    //     })
        
    //     setFilteredStudents(result);
    // }

    // This method is used to find average of the students 's grades
    const findAverage = (total, grade, index, arr) => {
        return total + parseInt(grade)/arr.length;
    }

    // This method toggle the student scores button
    const handleToggle = (id) => {
        const results = list.map((student) => {
            if(id === student.id){
                return {
                    ...student,
                    isOpened: !student.isOpened,
                }
            }
            return student;
        })
        setList(results);
    };

    const handleTags = (e, index) => {
        let value = e.target.value;
        if(e.key === 'Enter'){
             const results = list.map((student) => {
                 if(index === student.id){
                     if(!student.tags.includes(value)){    
                        return {
                            ...student,
                            tags : [...student.tags, value] 
                        }
                    }

                 }
                //  console.log(student);
                 return student;
             })
            //  setTags(value);
             setList(results);
             console.log(results);
             e.target.value = '';     
        }
    }


    return (
        <div className="students__block">
             <>
            <div>
                <input onKeyUp={handleSearchList} onChange={handleSearch} value={filters.name} name="name"   className="searchName" type="text" placeholder="Search By Name"/>
                <input onKeyUp={handleSearchList} onChange={handleSearch} value={filters.tag} name="tag"  className="searchName" type="text" placeholder="Search By Tag"/>
            </div>


            {/* This is the profile component where list of students data will get display */}

            {
                filteredStudents.map((student, i) => (
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
                            (<button onClick={() =>handleToggle(student.id)}>+</button>) :
                            (<button onClick={() => handleToggle(student.id)}>-</button>)
                        }  
                        </div>    
                   </div>        
                ))
            } 
        </>     
        </div>
    )
}

export default Students
