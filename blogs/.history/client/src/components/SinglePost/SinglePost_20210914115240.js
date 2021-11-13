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
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"></span>
                </div>
            </div>
        </div>
    )
}
