import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="flex flex-col justify-center w-2/3 mx-auto">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/myprofile" Component={Profile} />
          <Route path="/login" Component={LogIn} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
