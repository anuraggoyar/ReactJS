import './singlePost.css';
import animal from '../../img/animal_0050.jpg';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={animal} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Human's Influence On Planet Earth.
                    <div className="singlePostEdit">
                        <i></i>
                    </div>
                </h1>
            </div>
        </div>
    )
}
