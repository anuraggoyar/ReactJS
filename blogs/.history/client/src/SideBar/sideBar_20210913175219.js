import './sidebar.css';
import gamer from '../img/gamer.png';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={gamer} alt="" />
            </div>
        </div>
    )
}
