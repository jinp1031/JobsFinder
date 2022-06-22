import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";
import "./home.css";

export default function Home({isAuth,setIsAuth}){
  return (
    <div>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <div className="container">
        <Search />
      </div>
    </div>

  )
}