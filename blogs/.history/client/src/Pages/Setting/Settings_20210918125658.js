import './settings.css';
import gamer from "../../img/gamer.png";
import Sidebar from '../../components/Sidebar/Sidebar';
import { Context } from '../../context/Context';
import { useContext, useState } from 'react';
import axios from 'axios';

export default function Settings() {
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const publicFolder = "http://localhost:5000/images/";
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userID : user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePicture = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (err) { }
        }
        try {
            await axios.put(`http://localhost:5000/api/user/update/${user._id}`, updatedUser);
            setSuccess(true);
        } catch (err) { }
    };
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        {user.profilePicture ? <img src={file ? URL.createObjectURL (publicFolder + user.profilePicture)} alt="" /> : <img src={gamer} />}
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={e => { setFile(e.target.files[0]) }}/>
                    </div>
                    <label>Username</label>
                    <input type="text"  value={username} onChange={e => setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" placeholder="..." value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="settingSubmit" type="submit">Update</button>
                    {success && <span style={{color : 'green', textAlign:'center', marginTop:'10px'}}>Profile has been updated.</span> }
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
