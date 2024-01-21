import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation().pathname;
    return (
        <div className="header">
            <h3>PortFolio</h3>
            <div className="nav-items">
                <ul>
                    <li ><Link className={location === '/' ?'underline':''} to={"/"}>Home</Link></li>
                    <li ><Link className={location === '/project' ? 'underline': ''} to={"/project"}>Project</Link> </li>
                    <li ><Link className={location === '/certificates' ? "underline" : ''} to={"/certificates"}>Certificate</Link> </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;