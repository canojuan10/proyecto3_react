import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./view/Home/Home";
import { Login } from "./view/Login/Login";
import { UserDetail } from "./view/UserDetail/UserDetail";
import { NewDetail } from "./view/NewDetail/NewDetail";
import { NotFound } from "./view/NotFound/NotFound";
import { Register } from "./view/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDetail />}></Route>
        <Route path="/details" element={<NewDetail />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
