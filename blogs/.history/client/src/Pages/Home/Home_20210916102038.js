import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () =>{
            const posts = await axios.get("http://localhost:5000/api/post");
            setPosts()
        }
        fetchPosts();
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
