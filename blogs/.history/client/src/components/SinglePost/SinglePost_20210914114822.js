import './singlePost.css';
import animal from '../../img/animal_0050.jpg';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={animal} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Human's Influe</h1>
            </div>
        </div>
    )
}
