import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./view/Home/Home";
import { Login } from "./view/Login/Login";
import { UserDetail } from "./view/UserDetail/UserDetail";
import { NewDetail } from "./view/NewDetail/NewDetail";
import { NotFound } from "./view/NotFound/NotFound";
import { Register } from "./view/Register/Register";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserDetail />}></Route>
        <Route path="/details" element={<NewDetail />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/user/validate/:registrationCode"
          element={<Register />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
