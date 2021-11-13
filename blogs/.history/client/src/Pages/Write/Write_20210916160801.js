import './write.css';
import image from '../../img/shoes-image.jpg';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Handle Submit !!');
        const newPost = {
            title : title,
            desc : desc,
            username : user.username
        };
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            console.log(fileName)
            data.append("name", fileName)
            data.append("file", file)
            newPost.photo = fileName;
            try{
                await axios.post('http://localhost:5000/api/upload', data)
            } catch(err) {
                alert('Something Went Wrong While Uploading Image!');
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/api/post/create', newPost);
            window.location.replace('/post/' + res.data._id);
            console.log(res);
        } catch(err) {
            alert("Something Went Wrong!");
        }
    }
    return (
        <div className="write">
            {file && <img className="writeImg" src={URL.createObjectURL(file)} alt="" />}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={e => { setFile(e.target.files[0]) }}/>
                    <input type="text" placeholder="Title"  className="writeInput" autoFocus={true} onChange={e => setTitle(e.target.value)} minLength={3} required/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText" onChange={e => setDesc(e.target.value) } required/>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
