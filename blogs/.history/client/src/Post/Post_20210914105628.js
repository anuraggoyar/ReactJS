import './post.css';
import nature from '../img/nature_0048.jpg'

export default function Post() {
    return (
        <div className="post">
            <img claassName="postImg" src={nature} alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Nature</span>
                    <span className="postCat">Environment</span>
                </div>
                <div className="postTitle">Human </div>
                
            </div>
        </div>
        )
}
