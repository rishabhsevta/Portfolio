import { Link } from 'react-router-dom';
import './project_header.css';

const Project_header = ()=>{
    return(
        <div className="project_header">
         <Link className='project_number' to="">1</Link>
         <Link className='project_number' to="project2">2</Link>
         <Link className='project_number' to="project3">3</Link>
        </div>
        )
}

export default Project_header;