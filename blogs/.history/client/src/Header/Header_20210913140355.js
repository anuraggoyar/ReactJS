import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="topLeft">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-pinterest-square"></i>
                <i class="fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem"></li>
                    <li className="topListItem">Home</li>
                </ul>
            </div>
            <div className="topRight">R</div>
        </div>
    )
}
