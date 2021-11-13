import { useState, useEffect } from 'react';
import './sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import gamer from '../img/gamer.png';

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('http://localhost:5000/api/cat/');
            console.log(res.data);
            setCats(res.data);
        }
        getCats();
    }, [])
    const capitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit harum facere explicabo, laudantium mollitia labore itaque voluptates cum officia architecto voluptas.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map( cat => {
                        return <Link className="link" to={`/?cat=${cat.name}`}><li key={cat._id} className="sidebarListItem">{capitalise(cat.name)}</li></Link>
                    })}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>

    )
}
