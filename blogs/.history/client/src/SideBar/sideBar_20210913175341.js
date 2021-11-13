import './sidebar.css';
import gamer from '../img/gamer.png';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={gamer} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum facere explicabo, laudantium mollitia labore itaque voluptates cum officia architecto voluptas ad dolore voluptate, assumenda, perspiciatis minus! Quo, est eligendi!</p>
            </div>
        </div>
        
    )
}
