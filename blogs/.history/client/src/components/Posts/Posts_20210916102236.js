import './posts.css';
import React from 'react'
import Post from '../Post/Post';

export default function Posts({posts}) {
    return (
        <div className="posts">
            <Post pos/>
        </div>
    )
}
