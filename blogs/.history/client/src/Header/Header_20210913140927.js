import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="topLeft">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-pinterest-square"></i>
                <i className="fab fa-instagram-square"></i>
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
                <img classNane="topImg" src="avatar.png" alt="Avatar" class="avatar" />
                <i className="topSearchIfas fa-search"></i>
            </div>
        </div>
    )
}
