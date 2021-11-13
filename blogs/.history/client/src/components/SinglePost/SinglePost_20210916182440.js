import './singlePost.css';
import animal from '../../img/animal_0050.jpg';
import { useLocation } from 'react-router';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    const [post, setPost] = useState([]);
    const { user } = useContext(Context);
    const publicFolder = 'http://localhost:5000/images/';

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${postId}`);
            setPost(res.data);
        }
        fetchPost();
    }, [postId])
    const handleDelete = async () => {
        try{
            const res = await axios.delete('http://localhost:5000/api/post/delete' + postId);
            window.location.
        } catch(err){
            alert('Something Went Wrong!')
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && <img src={publicFolder + post.photo} alt="" className="singlePostImg" />}
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user?.username && <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>}
                    
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <Link className="link" to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
                    <span className="singlePostDate">{'' + new Date(post.createdAt).toDateString() }</span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div>
        </div>
    )
}
