import Navbar from "../components/navbar/Navbar";
import Search from "../components/search/Search";
import "./home.css";

export default function Home(){
  return (
    <div>
      <Navbar />
      <div className="container">
        <Search />
      </div>
    </div>

  )
}