import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useState } from 'react';

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        
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
