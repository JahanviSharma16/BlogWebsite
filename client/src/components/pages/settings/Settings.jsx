import Sidebar from "../../sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://newbreak.church/wp-content/uploads/2023/12/rokbmubcovg-1536x1024.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text"  placeholder="Jahanvi"/>
            <label>Email</label>
            <input type="text"  placeholder="jahanvi@gmail.com"/>
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
      
    </div>
  )
}
