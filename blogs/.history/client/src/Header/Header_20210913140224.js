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
                <topList className="ul"></topList>
            </div>
            <div className="topRight">R</div>
        </div>
    )
}
