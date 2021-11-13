import './post.css';
import nature from '../../img/nature_0048.jpg'

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={nature} alt=""/>}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map()}
                    <span className="postCat">Nature</span>
                    <span className="postCat">Environment</span>
                </div>
                <div className="postTitle">{post.title}</div>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
        )
}
