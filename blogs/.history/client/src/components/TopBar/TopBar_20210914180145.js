import './topBar.css';
import gamer from '../../img/gamer.png';
import { Link } from 'react-router-dom';

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"><Link to></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Log Out</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src={gamer} alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
