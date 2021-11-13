import './post.css';
import nature from '../../img/nature_0048.jpg'

export default function Post({post}) {
    return (
        <div className="post">
            <img className="postImg" src={nature} alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Nature</span>
                    <span className="postCat">Environment</span>
                </div>
                <div className="postTitle">{post.title}</div>
                <hr/>
                <span className="postDate">{post.createdAt}</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in sed nulla ullam minima ut nobis voluptate dolorem reprehenderit explicabo delectus assumenda, odio expedita voluptatibus eligendi vel accusamus, veniam itaque?
            </p>
        </div>
        )
}
