import {useState, useEffect} from 'react';
import './App.css';
import Students from './components/Students';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
       
    // fetching students details from the rest API
    axios.get(`https://api.hatchways.io/assessment/students`)
    .then((res) => {
      setStudents(res.data.students);
    })
  }, []);
  return (
    <div className="App">
      <Students  students={students}/>
    </div>
  );
}

export default App;
