import './settings.css';
import profile from '../../img/abstract_0048.jpg';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import axios from 'axios';

export default function Settings() {
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = {
            username: user.username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/api/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post(   http://localhost:5000/api/user/update/, newPost);
            window.location.replace("post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src={user.profilePicture} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text"  placeholder="Anurag Goyar"/>
                    <label>Email</label>
                    <input type="email" placeholder="anuraggoyar@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="..." />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
