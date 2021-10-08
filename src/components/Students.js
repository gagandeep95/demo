import React from 'react';
import Searchbar from './Searchbar';
import "../App.css";

function Students({students}) {
    
    return (
        <div className="students__block">
            <Searchbar  students={students}/>     
        </div>
    )
}

export default Students
