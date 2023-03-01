import logo from "./logo.svg";
import "./App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Post from "./components/post/Post";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import NotFound from "./components/shared/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Navigate to="/dashboard" />}></Route> */}
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route
              path="/:prev/:parentPath/:childPath"
              element={<Post />}
            ></Route>
            <Route path="/:prev/:parentPath" element={<Post />}></Route>
            <Route path="/:path" element={<Post />}></Route>
            <Route
              path="/search?searchTerm=:searchData"
              element={<Post />}
            ></Route>
            {/* <Route path="test" element={<Test />}></Route> */}
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
