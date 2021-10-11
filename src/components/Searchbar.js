import React, {useState} from 'react';
import '../App.css';


function Searchbar(props) {
    const [filterBy, setFilterBy] = useState({name: '', tag: ''}); //input values as object
    
    /* This method get input values and update the filterBy state 
        and pass it to the parent component
    */
    const handleSearch = (e) => {
        let value  = e.target.value;
        setFilterBy({
            ...filterBy,
            [e.target.name] : value
        })
        props.handleSearch(filterBy);
    }
    
    return (
        <>
            <div>
                <input onKeyUp={handleSearch} onChange={handleSearch} value={filterBy.name} name="name"   className="searchName" type="text" placeholder="Search By Name"/>
                <input onKeyUp={handleSearch} onChange={handleSearch} value={filterBy.tag} name="tag"  className="searchName" type="text" placeholder="Search By Tag"/>
            </div>
        </>
    )
}

export default Searchbar
