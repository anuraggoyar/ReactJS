import './settings.css';
import profile from '../../img/abstract_0048.jpg';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useContext } from 'react';

export default function Settings() {
    const {user} useContext();
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
                        <img src={profile} alt="" />
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
