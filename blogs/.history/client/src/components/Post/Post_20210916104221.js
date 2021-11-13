import './post.css';
import nature from '../../img/nature_0048.jpg'
import {Link} from 'react-router-dom';

export default function Post({post}) {
    const capitalise = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={nature} alt=""/>}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map( cat => {
                        return <span className="postCat">{capitalise(cat)}</span>
                    })}
                </div>
                <Link to='posts/:id'>
                    <div className="postTitle">{post.title}</div>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
        )
}
