import "./App.css";
import Login from "./components/loginregister/Login";
import Register from "./components/loginregister/Register";

import DataProvider from "./context/Dataprovider";
import Home from "./components/home/home";
import Navbar from "./components/Navbar/Navbar";
import CreatePost from "./components/posts/write/CreatePost";
import Update from "./components/posts/detailview/Update";
import { Detailview } from "./components/posts/detailview/Detailview";

import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, setAuthentication }, ...props) => {
  console.log(isAuthenticated);
  return isAuthenticated ? (
    <>
      <Navbar setAuthentication={setAuthentication} />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [isAuthenticated, setAuthentication] = useState(false);
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={<Login setAuthentication={setAuthentication} />}
            />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  setAuthentication={setAuthentication}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/createpost" element={<CreatePost />}></Route>
            </Route>

            <Route
              path="/details/:id"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  setAuthentication={setAuthentication}
                />
              }
            >
              <Route path="/details/:id" element={<Detailview />} />
            </Route>
            <Route
              path="/updatepost/:id"
              element={
                <PrivateRoute
                  isAuthenticated={isAuthenticated}
                  setAuthentication={setAuthentication}
                />
              }
            >
              <Route path="/updatepost/:id" element={<Update />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
