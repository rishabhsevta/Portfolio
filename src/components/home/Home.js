import { Link } from "react-router-dom";
import rishabh from './rishabhsevta.jpeg';
import {FaHeart,FaInstagram,FaLinkedinIn,FaGithub,FaFacebook} from 'react-icons/fa';
import axios from "axios";
import "./home.css";
import constants from "../../constants/constants";

const Home = () => {

    const handleDownloadCv = ()=>{
        const fun = async()=>{
            const response = await axios.get(constants.RESUME,{responseType:'blob'});
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
                   <Link to={constants.FACEBOOK}><FaFacebook></FaFacebook></Link>
                    <Link to={constants.GITHUB}><FaGithub></FaGithub></Link>
                    <Link to={constants.INSTAGRAM}><FaInstagram></FaInstagram></Link>
                    <Link to={constants.LINKEDIN}><FaLinkedinIn></FaLinkedinIn> </Link>     
                </div>
            </div>
            <div className="box2">
                <span id="line1">Hello, It's Me</span><br/>
                <span id="line2">Rishabh Sevta</span><br/>
                <span id="line3">And I <FaHeart className="heart"/> </span>
                <span id="line4">Web Development </span><br/><br/>
                <button id="download-cv" onClick={handleDownloadCv}>Download Cv</button>
            </div>
       </div>
    )
};
export default Home;