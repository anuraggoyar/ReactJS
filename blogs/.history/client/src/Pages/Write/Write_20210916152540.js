import './write.css';
import image from '../../img/shoes-image.jpg';
import { useState } from 'react';
export default function Write() {
    const [title, setTitle] = useState("");
    const []
    return (
        <div className="write">
            <img className="writeImg" src={image} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title"  className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
