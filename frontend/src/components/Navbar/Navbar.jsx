import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import writeicon from "../icons/copy-writing.png";
import dropdownicon from "../icons/drop-down-arrow.png";
import { useState, useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { logoutUser } from "../../services/apiService";

export default function Navbar({ setAuthentication }) {
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  const { account } = useContext(DataContext);

  const handlelogoclick = () => {
    navigate("/");
  };

  function logouthandle(e) {
    let response = logoutUser(account.email);
    response.then((result) => {
      if (result) {
        console.log(result);
        setAuthentication(false);
        navigate("/");
      } else {
        console.log("something is wrong while logout");
      }
    });
  }
  return (
    <div className="navbar">
      <h1 onClick={handlelogoclick}>Blogspot</h1>
      <div className="nav-buttons">
        <div className="write">
          <Link to="/createpost">
            <div>
              <img src={writeicon} alt="" srcset="" />
            </div>
            <div>Write</div>
          </Link>
        </div>
        <div
          className="user"
          onClick={(e) => {
            setDrop(!drop);
          }}
        >
          <div className="user-container">{account.name[0].toUpperCase()}</div>
          <div className="drawer-arrow">
            <img src={dropdownicon} alt="" srcset="" />
          </div>
          <div className="dropdown" style={{ display: drop ? "flex" : "none" }}>
            <button className="profile drop-item">Profile</button>
            <button className="library drop-item">Library</button>
            <button className="stories drop-item">Stories</button>
            <button className="setting drop-item">Setting</button>

            <button className="help drop-item">Help</button>

            <button
              className="logout drop-item"
              onClick={(e) => {
                logouthandle(e);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
