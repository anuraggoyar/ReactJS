import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="topLeft">
                <i classNAme="fab fa-facebook-square"></i>
                <i classNAme="fab fa-twitter-square"></i>
                <i classNAme="fab fa-pinterest-square"></i>
                <i classNAme="fab fa-instagram-square"></i>
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
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}
