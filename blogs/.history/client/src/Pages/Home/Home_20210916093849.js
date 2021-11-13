import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useState } from 'react';
import axios from 'axiso';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () =>{
            
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
