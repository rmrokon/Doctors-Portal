import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NavBar from "./Pages/Shared/NavBar";



function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path={'/appoinment'} element={<Appoinment></Appoinment>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
