import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useState } from 'react';
import axios from 'axi0o';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () =>{
            const posts = await axios.get("/posts");
            console.log(posts);
        }
    }, [])
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
