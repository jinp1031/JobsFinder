import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from 'react-router-dom';
import Login from "./pages/Login";
import { useState } from "react";
function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  )
}

export default App;