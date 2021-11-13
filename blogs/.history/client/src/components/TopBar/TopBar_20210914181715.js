import './topBar.css';
import gamer from '../../img/gamer.png';
import { Link } from 'react-router-dom';

export default function TopBar() {
    const user = true;
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div> 
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? 
                    <img className="topImg" src={gamer} alt="" />
                    g: <Link className="link" to="/lo">LOGIN</Link>}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
