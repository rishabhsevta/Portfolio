import { BsLightbulb } from "react-icons/bs";
import './project.css';
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import Project_header from "./project_header/Project_header";

const Project = ()=>{
    const [isChecked,setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

const handleChange =async(e)=>{
  setIsChecked(isChecked?false:true);
  try{
    setIsLoading(true);
    let data = await fetch('http://127.0.0.1:3000/project/control',{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"value":e.target.value})
  });
    data = await data.json();
    // console.log(data);
  }
  catch(err){
    console.log(err);
  }
}


    return(<>
          {/* <Project_header ></Project_header> */}
        <div className="project-main">
        <label>
            <input type="checkbox" onChange={handleChange}></input>
            <span><BsLightbulb className="bulb-icon"></BsLightbulb></span>
        </label>
        <div className={`${isChecked ? 'bulb-on':'bulb-off'}`}></div>
        </div>
        </>
    )
};
export default Project;