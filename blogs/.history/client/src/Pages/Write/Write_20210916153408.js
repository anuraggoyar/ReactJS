import './write.css';
import image from '../../img/shoes-image.jpg';
import { useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username : user.username
        }
        if(file) {
            const 
        }
        try{
           const res =  await axios.post()
        } catch(err) {

        }
    }
    return (
        <div className="write">
            <img className="writeImg" src={image} alt="" />
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title"  className="writeInput" autoFocus={true} onChange={e => {setTitle(e.target.value)}} minLength={3} required/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText" onChange={e => { setDesc(e.target.value) }} required/>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
