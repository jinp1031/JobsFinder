import "./navbar.css"
import {FaHeart} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = ({isAuth,setIsAuth}) => {
  const signO = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    })
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hired!🎊</span>
        <div className="navItems">
          <button className="navButton">
            Fav
            <FaHeart color="red"/>
            Jobs
          </button>
          {!isAuth ? <Link className="loginSBTN" to="/login" style={{textDecoration:"none"}}>Login</Link> : <button className="navButton" onClick={signO}>Log out</button>}
        </div>
      </div>
    </div>
  )
}

export default Navbar