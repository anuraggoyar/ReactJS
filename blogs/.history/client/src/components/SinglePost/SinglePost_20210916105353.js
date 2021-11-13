import './singlePost.css';
import animal from '../../img/animal_0050.jpg';
import { useLocation } from 'react-router';
import axios from 'axios';

export default function SinglePost() {
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    useEffect(() => {
        const fetchPost = axios.get(`localhost:5000/api/post/$`)
    }, [postId])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={animal} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Human's Influence On Planet Earth.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Anurag Goyar</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus delectus nobis laborum enim necessitatibus! Quia placeat harum quo necessitatibus minima nam quaerat ducimus mollitia corporis? Modi, ab nemo. Magnam, at?
                </p>
            </div>
        </div>
    )
}
