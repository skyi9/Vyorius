import Navbar from "./components/Navbar";
import Task from "./components/Task";
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
