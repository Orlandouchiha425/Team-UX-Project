import axios from "axios";
import { useState, useEffect } from "react";
import { getAllProjects } from ('../../utilities/api/projects/projects-api')

export default function SearchBar({user, setUser}){
    const [search,setSearch]=useState({
        keywordTags:[],
        projectName:"",
        zipcode:'',
        projectDescription:""


             }
    )


    // useEffect(() => {
    //   const handleChange = (evt) => {
    //     if( evt.target)
    //   }

    // })
  
   


    return (
      <form>
      <input 
            type="text"
            value={search} 
             placeholder="Search ..." 
             onChange={(event) => setSearch(event.target.value)}/>
            
          <label>
           
          </label>
        </form>
  

              );
     }
    
