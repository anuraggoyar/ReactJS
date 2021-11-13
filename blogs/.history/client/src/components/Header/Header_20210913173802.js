import './header.css';
import headerBack from '../img/headerBack.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blogs</span>
            </div>
            <img className="headerImg"
                 src={headerBack} alt="" />
        </div>
    )
}
