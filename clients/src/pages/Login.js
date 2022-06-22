import "./login.css";
import {auth, provider} from '../firebase.js'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signG = ()=>{
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    })
  }

  return (
   <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <p className="loginDesc">Sign In With Google</p>
        <button
        className="loginBtn"
        onClick={signG}
        >
        Sign In With Google
        </button>
      </div>
      <div className="loginRight">
        <h3 className="loginLogo">Hired!🎉</h3>
        <span className="loginDesc">May the force be with you</span>
      </div>
    </div>
   </div>
  )
}

export default Login;