import "./settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Link} from "react-router-dom";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleMain"><h1>Profile</h1></span>
                    <div className="settingsLinks">
                        <Link to="/settings" className="settingsTitleUpdate">Update Account</Link>
                        <Link to="/post/all/my" className="settingsTitleUpdate"> My posts</Link>
                        <a className="settingsTitleDelete">Delete Account</a>
                    </div>
                </div>
                <form className="settingsForm">
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <link rel="icon" type="image/png" href="profile.png"/>
                            {/*<link rel="icon" type="image/gif" href="icon.gif"/>*/}
                            {/*<i className="settingsPPIcon far fa-user-circle"></i>*/}
                        </label>
                        <div className="inf-profile" >
                            <div>
                                {/*<span className="inf-label">Username: </span>*/}
                                <span className="inf-value">username</span>
                            </div>

                            <div>
                                <span className="inf-label">Email: </span>
                                <span className="inf-value">example@email.ru</span>
                            </div>

                        </div>

                        {/*<input*/}
                        {/*    id="fileInput"*/}
                        {/*    type="file"*/}
                        {/*    // style={{ display: "none" }}*/}
                        {/*    className="settingsPPInput"*/}
                        {/*/>*/}
                    </div>

                </form>
            </div>
            <Sidebar />
        </div>
    );
}