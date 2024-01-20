import { Link } from "react-router-dom";
import "./home.css";
import rishabh from './rishabhsevta.jpg'
import {FaHeart,FaInstagram,FaLinkedinIn,FaGithub,FaFacebook} from 'react-icons/fa';
import axios from "axios";

const Home = () => {

    const handleDownloadCv = ()=>{
        const fun = async()=>{
            const response = await axios.get('https://res.cloudinary.com/dehaame7e/image/upload/v1704636845/Rishabh_resume_k0ff4w.jpg',{responseType:'blob'});
            const blob = new Blob([response.data],{type:response.headers['content-type']});
            const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'rishabh.jpeg'); // Set the desired file name
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
        }
        fun();
    }

    return (
       <div className="home-main">
            <div className="box1">
                <img className="image" src={rishabh}></img>
                <div className="icons">
                   <Link to="https://www.facebook.com/rishabh.sevta/"><FaFacebook></FaFacebook></Link>
                    <Link to="https://github.com/rishabhsevta"><FaGithub></FaGithub></Link>
                    <Link to="https://www.instagram.com/rishabhsevta/"><FaInstagram></FaInstagram></Link>
                    <Link to="http://linkedin.com/in/rishabh-sevta-923b2a208"><FaLinkedinIn></FaLinkedinIn> </Link>     
                </div>
            </div>
            <div className="box2">
                <span id="line1">Hello, It's Me</span><br/>
                <span id="line2">Rishabh Sevta</span><br/>
                <span id="line3">And I'm </span>
                <span id="line4">MERN Developer</span><br/><br/>
                <button id="download-cv" onClick={handleDownloadCv}>Download Cv</button>
            </div>
       </div>
    )
};
export default Home;