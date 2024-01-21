import { BsLightbulb } from "react-icons/bs";
import './project.css';
import { useState } from "react";
import constants from "../../constants/constants";

import Project_header from "./project_header/Project_header";

const Project = ()=>{
    const [isChecked,setIsChecked] = useState(false);    

const handleChange =async(e)=>{
  setIsChecked(isChecked?false:true);
  try{
    setIsLoading(true);
    let data = await fetch(constants.API,{
    method:'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({"value":e.target.value})
  });
    data = await data.json();
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