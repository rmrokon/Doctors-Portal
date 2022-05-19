import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Register from "./Pages/Register/Register";
import NavBar from "./Pages/Shared/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppoinments from "./Pages/Dashboard/MyAppoinments";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";



function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path={'/appoinment'} element={<RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>}></Route>

        <Route path={'/dashboard'} element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>

          <Route index element={<MyAppoinments></MyAppoinments>}></Route>

          <Route path="reviews" element={<MyReview></MyReview>}></Route>

          <Route path="allusers" element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>

          <Route path="addDoctor" element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>

        </Route>

        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
