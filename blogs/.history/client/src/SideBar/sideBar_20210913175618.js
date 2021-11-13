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
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Travel</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                </div>
        </div>

    )
}
