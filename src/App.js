import React,{useState, useEffect} from 'react';
import './App.css';
import Students from './components/Students';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {   
    // fetching students details from the rest API
    axios.get(`https://api.hatchways.io/assessment/students`)
    .then((res) => {
      const results = res.data.students.map((student) => {
        return {
          ...student,
          isOpened : false,
          tags : []
        }
      })
      setStudents(results);
    })
  },[]);

  return (
    <div className="App">
          <Students students={students}/>
    </div>
  );
}

export default App;
