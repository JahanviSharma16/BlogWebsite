import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./topBar.css"

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/">CONTACT</Link>
            </li>
            <li className="topListItem">
           <Link className="link" to="/write"> WRITE</Link>
            </li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img className="topImg" src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
          ):(
            <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
            </ul>
            
          )
        }
        <i className="topSeachIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
