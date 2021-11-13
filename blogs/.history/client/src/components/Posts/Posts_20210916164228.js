import './posts.css';
import React from 'react'
import Post from '../Post/Post';

export default function Posts({posts}) {
    return (
        <div className="posts">
            {posts && posts.map(post => {
                return <Post key={post._id} post={post}/>
            })}
        </div>
    )
}