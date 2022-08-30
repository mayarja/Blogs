import Navbar from "./componnets/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Single from "./pages/single/Single.jsx";
import Sittings from "./pages/sittings/Sittings.jsx";
import Write from "./pages/wirte/Write.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

// let [user, setuser] = useState(false);
function App() {
  let [user, setuser] = useLocalStorage("regi", false);

  let fnregister = () => {
    setuser(true);
  };
  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/Blogs/" element={<Home />} />
          <Route path="/post/:postid" element={<Single />} />
          <Route
            path="/write"
            element={user ? <Write /> : <Register fnregister={fnregister} />}
          />
          <Route path="/sittings" element={<Sittings />} />
          <Route
            path="/register"
            element={user ? <Home /> : <Register fnregister={fnregister} />}
          />
          <Route path="/login" element={user ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
