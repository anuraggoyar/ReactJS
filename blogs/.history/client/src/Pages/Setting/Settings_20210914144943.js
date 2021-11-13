import './settings.css';
import profile from '../../img/gamer.png';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Settings() {
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
                            <i className="settingPPIcon fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type="text"  placeholder="Anurag Goyar"/>
                    <label>Email</label>
                    <input type="email" placeholder="anuraggoyar@gmail.com" />
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
